const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./config");

module.exports = class JWTManager {
  static secretKey = SECRET_KEY;

  static generateToken(data) {
    return jwt.sign(data, this.secretKey);
  }

  static decode(token) {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      return null;
    }
  }
};
