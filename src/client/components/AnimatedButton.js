import * as PIXI from "pixi.js";

export default class AnimatedButton extends PIXI.AnimatedSprite {
  constructor(scene, x, y, frames, sprite) {
    super(frames);

    this.scene = scene;
    this.x = x;
    this.y = y;
    this.frames = frames;
    this.sprite = sprite;

    this.buttonMode = true;
    this.position.set(this.x, this.y);
    this.anchor.set(0.5);
    this.animationSpeed = 0.3;
    this.play();

    this.scene.addChild(this);
  }

  setEventMode(value) {
    this.eventMode = value;
  }

  changeFrames(frames) {
    this.stop();
    this.textures = frames;
    this.play();
  }

  onClick(cb) {
    this.on("pointerdown", () => {
      this.changeFrames(this.sprite);
    });
    this.on("pointerup", () => {
      cb();
    });
    this.on("pointerout", () => {});
  }

  turnOn() {
    this.changeFrames(this.frames);
  }

  staticOnClick(cb) {
    this.on("pointerdown", () => {
      this.changeFrames(this.sprite);
    });
    this.on("pointerup", () => {
      this.turnOn();
      cb();
    });
    this.on("pointerout", () => {
      this.turnOn();
    });
  }
}
