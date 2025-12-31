import * as PIXI from "pixi.js";

export default abstract class BaseScene extends PIXI.Container {
  sceneKey: string
   constructor(sceneKey: string) {
    super();
    this.sceneKey = sceneKey
  }

  abstract init(): void
}
