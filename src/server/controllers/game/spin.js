const databaseManager = require("../../MongoDB/DatabaseManager");
const loginToken = require("../../LoginToken/LoginToken");
const {
  ROWS,
  COLUMNS,
  SYMBOL_TEXTURE_COUNT,
} = require("../../../shared/config");
const getRandomNumber = require("../../../shared/helpers/getRandomNumber");
const matchCombinations = require("../../gameData/matchCombinations");
const columnsXValues = require("../../gameData/columnsXValues");

async function spin(req, res) {
  try {
    const { bet, token } = req.body;
    const decodedToken = loginToken.decode(token).accountID;
    const playerData = await getPlayerData(decodedToken);
    const { money } = playerData;

    let spinData = {};

    if (isInvalidBet(money, bet)) {
      spinData = { success: false };
    } else {
      const textureIndexes = getRandomTextureIndex();
      const horizontalMatches = getHorizontalMatches(textureIndexes);
      const verticalMatches = getVerticalMatches(textureIndexes);
      const moneyWon = getWinValue(horizontalMatches, bet);
      const totalMoney = calculateTotalMoney(money, bet, moneyWon);

      await databaseManager.updatePlayer({
        accountID: decodedToken,
        money: totalMoney,
      });

      spinData = {
        textures: textureIndexes,
        horizontalMatches,
        verticalMatches,
        moneyWon,
      };
    }

    res.json(spinData);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getPlayerData(accountID) {
  const getPlayerData = await databaseManager.downloadPlayer({ accountID });
  return getPlayerData;
}

function getRandomTextureIndex() {
  const drawTextureIndex = [];

  for (let i = 0; i < COLUMNS; i++) {
    drawTextureIndex[i] = [];

    for (let j = 0; j < ROWS; j++) {
      const textureIndex = getRandomNumber(0, SYMBOL_TEXTURE_COUNT - 1);
      drawTextureIndex[i][j] = textureIndex;
    }
  }
  return drawTextureIndex;
}

function getHorizontalMatches(textureIndexes) {
  const matches = {
    symbolsIndex: [],
    lineIndex: [],
  };

  for (const combination of matchCombinations) {
    const array = combination.symbolsCoordinates.map(
      ([row, column]) => textureIndexes[row][column]
    );

    const allAreEqual = array.every((num) => num === array[0]);
    if (
      allAreEqual ||
      array.includes(7) ||
      array.includes(10) ||
      array.includes(9)
    ) {
      const filteredArray = array.filter(
        (num) => num !== 7 && num !== 10 && num !== 9
      );
      const isEqual = filteredArray.every((num) => num === filteredArray[0]);
      if (allAreEqual || isEqual) {
        matches.symbolsIndex.push(combination.symbolsIndex);
        matches.lineIndex.push(combination.lineIndex);
      }
    }
  }

  return matches;
}

function getVerticalMatches(textureIndexes) {
  let verticalMatchesX = [];

  for (let i = 0; i < COLUMNS; i++) {
    if (
      textureIndexes[i][0] === textureIndexes[i][1] &&
      textureIndexes[i][0] === textureIndexes[i][2]
    ) {
      let columnX = columnsXValues[i];
      verticalMatchesX.push(columnX);
    }
  }

  return verticalMatchesX;
}

function getWinValue(matches, totalBet) {
  const matchesCount = matches.symbolsIndex.length;
  const totalWin = totalBet * matchesCount;
  return totalWin;
}

function calculateTotalMoney(currentMoney, bet, moneyWon) {
  return currentMoney - bet + moneyWon;
}

function isInvalidBet(money, bet) {
  return money - bet < 0 || money < 0 || bet < 100 || bet > money;
}
module.exports = spin;
