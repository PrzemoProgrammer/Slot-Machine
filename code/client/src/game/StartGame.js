import AppStorage from "../storage/AppStorage";
import SceneManager from "../managers/SceneManager";
import Game from "./scenes/Game";
import Preload from "./scenes/Preload";

export const StartGame = (game) => {
  AppStorage.add(game);
  SceneManager.addScene([Preload, Game]);
  SceneManager.autoStartFirstScene();
  globalThis.__PIXI_APP__ = game;
};
