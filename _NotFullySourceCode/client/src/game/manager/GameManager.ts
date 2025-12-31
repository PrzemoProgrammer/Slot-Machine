import GameSignals from "../../gameSignals/GameSignals";
import SceneManager from "../../managers/SceneManager";

export default class GameManager {
  protected static game: any = null

  static startGame() {
    const game = SceneManager.getScene("Game")

    if(!game?.isActive) {
      SceneManager.startScene("Game")
      this.game = SceneManager.getScene("Game")
      this.bindSignals();
      return
    }
      SceneManager.setVisible("Game", true)
    }

     private static updateGameData(gameData: any){
      this.game.updateGameState(gameData)
  }

    public static changeOrientation(key: string){
      if(this.game)this.game.changeOrientation(key)
    }

    public static handleSounds(value: string){
      this.game.handleSounds(value)
    }

    private static bindSignals(){
      GameSignals.onUpdateGameData.add((gameData: any) => this.updateGameData(gameData));
  }
}