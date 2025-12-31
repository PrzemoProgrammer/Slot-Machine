const GameManager = require("../../game/manager/GameManager");

class SocketManager {
  constructor(socketServer) {
    this.socketServer = socketServer;

    this.socketServer.on("connection", (socket) => {
      console.log("new user", socket.id);
      GameManager.createNewUser(socket.id);
      this.setupSocketListeners(socket);
    });
    this.setupGameListeners();
  }

  setupSocketListeners(socket) {
    socket.once("getUserState", (data) => {
      const userState = GameManager.getUserState(socket.id, data);
      socket.emit("userState", userState);
    });

    socket.on("spinAction", async (data) => {
      const updatedGameData = await GameManager.userSpinAction(socket.id, data);
      socket.emit("updateGameData", updatedGameData);
    });

    socket.on("disconnect", () => {
      console.log(`user ${socket.id} disconnect`);
      GameManager.deleteUser(socket.id);
    });
  }
}

module.exports = SocketManager;
