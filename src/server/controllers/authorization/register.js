const databaseManager = require("../../MongoDB/DatabaseManager");

async function registerUser(req, res) {
  try {
    const { login, password } = req.body;
    const accountID = login + password;

    const databaseData = {
      accountID: accountID,
      money: 600,
    };
    console.log(databaseManager);
    await databaseManager.addPlayer(databaseData);

    return res.json({ success: true });
  } catch (error) {
    console.error("An error occurred during registration", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

module.exports = registerUser;
