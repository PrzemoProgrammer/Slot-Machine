import * as PIXI from "pixi.js";
import gsap from "gsap";
import AssetsManager from "../utility/AssetsManager";
import Button from "../components/Button";

export default class AnimateLabel {
  constructor(scene, x, y, sprite) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    this.startText = 0;

    this.background = this.createBackground(this.x, this.y);
    this.label = this.createLabel(this.x / 2, this.y / 2);
    this.text = this.createText(this.label.x, this.label.y + 40);
    this.confirmButton = this.createConfirmButton(
      this.label.x,
      this.label.y + 170
    );
  }

  createBackground(x, y) {
    const sprite = AssetsManager.getImage("darkScreen");
    let bg = new PIXI.Sprite(sprite);

    bg.anchor.set(0, 0);
    bg.width = x;
    bg.height = y;

    this.scene.addChild(bg);
    return bg;
  }

  createLabel(x, y) {
    const texture = this.sprite.animations["move"];
    const label = new PIXI.AnimatedSprite(texture);

    label.position.set(x, y);
    label.anchor.set(0.5, 0.5);
    label.moveLimitY = 1000;
    label.animationSpeed = 0.5;
    label.loop = false;
    // label.play();

    this.scene.addChild(label);
    return label;
  }

  createConfirmButton(x, y) {
    const mainImage = AssetsManager.getImage("collect_button");
    const pushImage = AssetsManager.getImage("collect_button_push");

    const button = new Button(this.scene, x, y, mainImage, pushImage);

    button.setEventMode("static");

    return button;
  }

  createText(x, y) {
    const text = new PIXI.Text(this.startText, {
      fontFamily: "Arial",
      fontSize: 80,
      fill: 0xffffff,
      stroke: "#FFFFFF",
      strokeThickness: 2,
      dropShadow: true,
      dropShadowColor: "#FFFFFF",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 2,
    });

    text.position.set(x, y);
    text.anchor.set(0.5, 0.5);

    this.scene.addChild(text);

    return text;
  }

  updateText(text) {
    this.text.text = text;
  }

  activeAndPlay(value) {
    this.show();
    this.label.play();
    this.startAnimateNumber(value);
  }

  startAnimateNumber(value) {
    gsap.to(this, {
      startText: value,
      duration: 2,
      onUpdate: () => {
        this.updateText(Math.round(this.startText));
      },
    });
  }

  resetText() {
    this.startText = 0;
  }

  reset() {
    this.hide();
    this.resetText();
  }

  hide() {
    this.background.visible = false;
    this.label.visible = false;
    this.text.visible = false;
    this.confirmButton.hide();
  }

  show() {
    this.background.visible = true;
    this.label.visible = true;
    this.text.visible = true;
    this.confirmButton.show();
  }
}
