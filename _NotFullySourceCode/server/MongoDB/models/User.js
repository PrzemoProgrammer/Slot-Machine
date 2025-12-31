const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  passwordHash: String,
  money: Number,
  payment: {
    id: String,
  },
});

module.exports = mongoose.model("Users", UserSchema);
