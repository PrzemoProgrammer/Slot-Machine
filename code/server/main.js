const { app, server, port, socketServer } = require("./index");
const {
  authentication,
  registration,
} = require("./controllers/authorization/index");
const SocketManager = require("./Socket/manager/SocketManager");

server.listen(port, async () => {
  app.post("/authentication", authentication);
  app.post("/registration", registration);
  this.socketManager = new SocketManager(socketServer);

  console.log(`Listening on ${server.address().port}`);
});
