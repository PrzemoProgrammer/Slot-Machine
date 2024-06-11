const mongoose = require("mongoose");
const { DB_URL } = require("./credentials");
mongoose.set("strictQuery", true);
const User = require("./models/User");

class DatabaseManager {
  constructor() {}

  async connectDatabase() {
    await mongoose
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(async () => {
        console.log("DB init");
      });
  }

  async createUser(data) {
    const { nick, money, passwordHash } = data;
    const user = new User({
      nick: nick,
      money: money,
      passwordHash: passwordHash,
    });

    await user
      .save()
      .then((savedDoc) => {
        console.log("User saved in database");
      })
      .catch((error) => {
        console.log(error + " User NOT saved in database");
      });

    return true;
  }

  updateUser(data) {
    return User.updateOne(
      { id: data.id },
      {
        $set: {
          score: data.score,
        },
      }
    );
  }

  async findUser(data) {
    return User.findOne(data).select("-_id -passwordHash -__v").lean();
  }

  downloadUser(data) {
    return this.findUser(data).then((user) => {
      if (!user) {
        return "User does not exist";
      }
      return user;
    });
  }

  downloadUsers() {
    return User.find({});
  }
}

mongoose.connection.on("connected", function () {
  console.log("Connected to mongo");
});

mongoose.connection.on("error", (error) => {
  console.log("Mongo connection ERROR", error);
});

const databaseManager = new DatabaseManager();
module.exports = databaseManager;
