import * as PIXI from "pixi.js";

export default class Button extends PIXI.Sprite {
  constructor(scene, x, y, sprite, sprite2, sprite3) {
    super(sprite);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.sprite2 = sprite2;
    this.sprite3 = sprite3;

    // this.interactive = true;
    this.buttonMode = true;
    this.originalScale = this.scale.clone();
    this.anchor.set(0.5);
    this.position.set(this.x, this.y);
    this.scene.addChild(this);

    this.scaleValue = 0.9;
  }

  setEventMode(value) {
    this.eventMode = value;
  }

  onClick(cb) {
    this.on("pointerdown", () => {
      this.scale.set(
        this.scale.x * this.scaleValue,
        this.scale.y * this.scaleValue
      );
    });
    this.on("pointerup", () => {
      this.scale.copyFrom(this.originalScale);
      cb();
    });
    this.on("pointerout", () => {
      this.scale.copyFrom(this.originalScale);
    });
  }

  staticOnClick(cb) {
    this.on("pointerdown", () => {
      this.changeTexture(this.sprite2);
    });
    this.on("pointerup", () => {
      this.changeTexture(this.sprite);
      cb();
    });
    this.on("pointerout", () => {
      this.changeTexture(this.sprite);
    });
  }

  changeTexture(texture) {
    this.texture = texture;
  }

  resetButton() {
    this.scale.copyFrom(this.originalScale);
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }
}
