import Socket from "socket.io-client";
import { WEBSOCKET_URL } from "../config";
import GameSignals from "../../gameSignals/GameSignals";

class SocketClient {
  client: any
constructor() {
  this.client = null
  this.bindSignals()
}

public async connectWithServer() {
  this.client = await Socket(`${WEBSOCKET_URL}`)
}

public setupServerListeners() {
  this.client.on("userState", (data: any) => {
    GameSignals.onPlayerAndGameState.dispatch(data) 
  });

  this.client.on("updateGameData", (data: any) => {
    GameSignals.onUpdateGameData.dispatch(data) 
  });
}

private spinButtonClick(userData: any){
  this.client.emit("spinAction", userData);
}

private getPlayerAndGameState(authToken: string | undefined) {
  this.client.emit("getUserState", authToken);
}

private bindSignals(){
  GameSignals.spinButtonClick.add((userData: any) => this.spinButtonClick(userData));
  GameSignals.getPlayerAndGameState.add((data: string | undefined) => this.getPlayerAndGameState(data));
}
}


export default new SocketClient()