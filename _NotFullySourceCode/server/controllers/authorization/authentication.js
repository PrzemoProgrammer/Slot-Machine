const databaseManager = require("../../MongoDB/DatabaseManager");
const PasswordHasher = require("../../dataHasher/PasswordHasher");
const JWT = require("../../JWT/JWTManager");

async function authentication(req, res) {
  const { username, password } = req.body;
  const usernameString = String(username);
  const passwordString = String(password);

  try {
    const userPassword = usernameString + passwordString;
    const hashedPassword = await PasswordHasher.hashPassword(userPassword);
    const user = await databaseManager.findUser({
      passwordHash: hashedPassword,
    });

    if (!user) {
      console.log("User does not exist in database");
      return res.status(404).json({
        success: false,
        token: null,
      });
    }

    console.log("User exists in database");
    const jwt = JWT.generateToken(hashedPassword);

    return res.json({ success: true, jwt });
  } catch (error) {
    console.error("An error occurred during registration", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

module.exports = authentication;
