import * as PIXI from "pixi.js";

export default class MachineFrame extends PIXI.AnimatedSprite {
  constructor(scene, x, y, frames) {
    super(frames);

    this.scene = scene;
    this.x = x;
    this.y = y;
    this.frames = frames;

    this.position.set(this.x, this.y);
    this.animationSpeed = 0.3;
    this.play();

    this.scene.addChild(this);
  }
}
