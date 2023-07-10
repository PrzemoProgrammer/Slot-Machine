import * as PIXI from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../client/config";
import PreloadScene from "../client/scenes/PreloadScene";
import MenuScene from "../client/scenes/MenuScene";
import PlayScene from "../client/scenes/PlayScene";
import RegisterScene from "../client/scenes/RegisterScene";
import sceneManager from "./utility/SceneManager";
import { calculateScaleFactor } from "../client/screen/scaleFactor";
import "../../css/game.css";

const game = new PIXI.Application({
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  resizeTo: window,
});

document.body.appendChild(game.view);

function resize() {
  const scaleFactor = calculateScaleFactor();

  game.renderer.resize(GAME_WIDTH * scaleFactor, GAME_HEIGHT * scaleFactor);
  game.stage.scale.set(scaleFactor);
}

resize();

window.addEventListener("resize", resize);

sceneManager.addGame(game);
sceneManager.addScene([PreloadScene, MenuScene, RegisterScene, PlayScene]);
