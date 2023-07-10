const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  accountID: String,
  money: Number,
  payment: {
    id: String,
  },
});

module.exports = mongoose.model("Players", PlayerSchema);
