import * as PIXI from "pixi.js";

export default class Label {
  constructor(scene, x, y, sprite) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    this.textContent = 0;

    this.bg = this.addBackground(this.x, this.y);
    this.text = this.addText(this.x, this.y - 45);
  }

  addBackground(x, y) {
    const bg = new PIXI.Sprite(this.sprite);
    bg.position.set(x, y);
    bg.anchor.set(0.5, 1);
    this.scene.addChild(bg);

    return bg;
  }

  addText(x, y) {
    const text = new PIXI.Text(this.textContent, {
      fontFamily: "Arial",
      fontSize: 50,
      fill: 0xffffff,
      stroke: "#FFFFFF",
      strokeThickness: 2,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 2,
      wordWrap: true,
      wordWrapWidth: 180,
    });

    text.anchor.set(0.5, 0.5);
    text.position.set(x, y);

    this.scene.addChild(text);

    return text;
  }

  setAnchor(x, y) {
    this.bg.anchor.set(x, y);
    this.text.anchor.set(x, y);
  }

  setTextPosition(x, y) {
    this.text.position.set(x, y);
  }

  updateText(text) {
    this.text.text = text;
  }

  getValue() {
    return parseInt(this.text.text);
  }

  resetText() {
    this.text.text = 0;
  }
}
