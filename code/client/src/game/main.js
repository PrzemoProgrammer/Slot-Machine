import * as PIXI from "pixi.js";
import appConfig from "../config/appConfig";

const config = appConfig;

const StartGame = (parent) => {
  return new PIXI.Application({ ...config, parent: parent });
};

export default StartGame;
