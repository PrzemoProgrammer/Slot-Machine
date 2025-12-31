import { MiniSignal } from "mini-signals";

export default class GameSignals {
  static onUpdateGameData = new MiniSignal();
  static onUserState = new MiniSignal();
  static onShowSymbolDescribeLabel = new MiniSignal();
  static spinButtonClick = new MiniSignal();
  static onPlayerAndGameState = new MiniSignal();

  static getPlayerAndGameState = new MiniSignal();
}
