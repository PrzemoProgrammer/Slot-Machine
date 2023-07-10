const { app, server, port } = require(".");
const databaseManager = require("./MongoDB/DatabaseManager");
const {
  loginUser,
  registerUser,
} = require("./controllers/authorization/index");
const {
  createPayment,
  success,
  cancel,
} = require("./controllers/payPal/index");
const { getGameState, spin } = require("./controllers/game/index");

server.listen(port, async () => {
  await databaseManager.connectDatabase();

  app.post("/create_payment", createPayment);
  app.get("/success", success);
  app.get("/cancel", cancel);
  app.post("/register", registerUser);
  app.post("/login", loginUser);
  app.post("/game_state", getGameState);
  app.post("/spin", spin);

  console.log(`Listening on ${server.address().port}`);
});
