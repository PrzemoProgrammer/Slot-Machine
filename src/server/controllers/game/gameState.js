const databaseManager = require("../../MongoDB/DatabaseManager");
const loginToken = require("../../LoginToken/LoginToken");

async function getGameState(req, res) {
  try {
    const { clientToken } = req.body;
    const decodedToken = loginToken.decode(clientToken).accountID;
    const playerData = await getPlayerData(decodedToken);
    res.json({ money: playerData.money });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getPlayerData(accountID) {
  const getPlayerData = await databaseManager.downloadPlayer({ accountID });
  return getPlayerData;
}

module.exports = getGameState;
