const jwt = require("jsonwebtoken");

class LoginToken {
  constructor() {
    this.secretKey = "jajko";
  }

  createToken(data) {
    return jwt.sign(data, this.secretKey);
  }

  decode(token) {
    return jwt.verify(token, this.secretKey);
  }
}

const loginToken = new LoginToken();

module.exports = loginToken;
