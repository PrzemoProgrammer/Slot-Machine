const databaseManager = require("../../MongoDB/DatabaseManager");
const loginToken = require("../../LoginToken/LoginToken");

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    const clientAccountID = username + password;
    const player = await databaseManager.findPlayer({
      accountID: clientAccountID,
    });

    console.log(clientAccountID);

    if (!player) {
      console.log("Player does not exist");
      return res.status(404).json({
        success: false,
        token: null,
      });
    }

    console.log("Player exists");

    const token = loginToken.createToken({ accountID: clientAccountID });

    return res.json({ success: true, token });
  } catch (error) {
    console.error("An error occurred during login", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

module.exports = loginUser;
