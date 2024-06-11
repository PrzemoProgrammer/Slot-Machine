const databaseManager = require("../../MongoDB/DatabaseManager");
const PasswordHasher = require("../../dataHasher/PasswordHasher");

async function register(req, res) {
  const { username, password, nick } = req.body;

  try {
    const userPassword = username + password;

    if (checkCharactersCorrect(username, password, nick)) {
      console.log("one of the login characters is empty");
      return res.status(404).json({
        success: false,
        token: null,
      });
    }

    const hashedPassword = await PasswordHasher.hashPassword(userPassword);

    const user = await databaseManager.findUser({
      passwordHash: hashedPassword,
    });

    if (user) {
      console.log("User password hash exists in database");
      return res.status(404).json({
        success: false,
      });
    }

    console.log("User password hash  does not exist in database");
    const userData = {
      nick: nick,
      money: 0,
      passwordHash: hashedPassword,
    };

    databaseManager.createUser(userData);

    return res.json({ success: true });
  } catch (error) {
    console.error("An error occurred during registration", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

function checkCharacterCorrect(money) {
  // if (typeof money === 'number' && !isNaN(money)) {
  // return false;
  // }
  // if (typeof money === 'string' && money.trim() !== '') {
  // return false;
  // }
  return (
    !(typeof money === "number" && !isNaN(money)) &&
    !(typeof money === "string" && money.trim() !== "")
  );
  // return true;
}

function checkCharactersCorrect(username, password, nickname) {
  const usernameResult = checkCharacterCorrect(username);
  const passwordResult = checkCharacterCorrect(password);
  const nicknameResult = checkCharacterCorrect(nickname);
  return usernameResult && passwordResult && nicknameResult;
}

module.exports = register;
