const mongoose = require("mongoose");
const { DB_URL } = require("./credentials");
mongoose.set("strictQuery", true);
const Player = require("./models/Player");

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

  async addPlayer(data) {
    const { accountID, money } = data;

    console.log(money);
    const player = new Player({
      accountID: accountID,
      money: money,
      payment: {
        id: 0,
        coins: 0,
      },
    });

    await player
      .save()
      .then((savedDoc) => {
        console.log("Player saved in database");
      })
      .catch((error) => {
        console.log(error + " Player NOT saved in database");
      });

    return true;
  }

  updatePlayer(data) {
    const { accountID, money } = data;

    return Player.updateOne(
      { accountID: accountID },
      {
        $set: {
          money: money,
        },
      }
    );
  }

  updatePaymentId(data) {
    const { decodedToken, paymentId } = data;

    Player.updateOne(
      { accountID: decodedToken },
      {
        $set: {
          "payment.id": paymentId,
        },
      },
      { new: true }
    )
      .then((updatedPlayer) => {
        console.log(updatedPlayer);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  findPlayer(data) {
    return Player.findOne(data);
  }

  downloadPlayer(data) {
    return this.findPlayer(data).then((player) => {
      if (!player) {
        return "Player does not exist";
      }
      return player;
    });
  }

  // downloadPlayers() {
  //   return Player.find({});
  //   // .then((people) => {
  //   //   console.log(people);
  //   // })
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // });
  // }
}

mongoose.connection.on("connected", function () {
  console.log("Connected to mongo");
});

mongoose.connection.on("error", (error) => {
  console.log("Mongo connection ERROR", error);
  // process.exit(1);
});

const databaseManager = new DatabaseManager();

module.exports = databaseManager;
