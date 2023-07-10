// import * as PIXI from "pixi.js";
import Label from "../components/Label";
import Button from "../components/Button";
import AssetsManager from "../utility/AssetsManager";

export default class TotalBet extends Label {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);

    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    this.betAmount = 100;

    this.updateText(200);

    this.minusButton = this.addMinusButton(this.x - 265, this.y - 75);
    this.plusButton = this.addPlusButton(this.x + 265, this.y - 75);
    this.maxBetButton = this.addMaxBetButton(this.x + 1015, this.y - 80);
  }

  addMinusButton(x, y) {
    const mainImage = AssetsManager.getImage("minus_button");
    const pushImage = AssetsManager.getImage("minus_button_push");
    const blockImage = AssetsManager.getImage("minus_button_block");

    const button = new Button(
      this.scene,
      x,
      y,
      mainImage,
      pushImage,
      blockImage
    );

    button.setEventMode("static");

    return button;
  }

  addPlusButton(x, y) {
    const mainImage = AssetsManager.getImage("plus_button");
    const pushImage = AssetsManager.getImage("plus_button_push");
    const blockImage = AssetsManager.getImage("plus_button_block");

    const button = new Button(
      this.scene,
      x,
      y,
      mainImage,
      pushImage,
      blockImage
    );

    button.setEventMode("static");

    return button;
  }

  addMaxBetButton(x, y) {
    const mainImage = AssetsManager.getImage("max_bet_button");
    const pushImage = AssetsManager.getImage("max_bet_button_push");
    const blockImage = AssetsManager.getImage("max_bet_button_block");

    const button = new Button(
      this.scene,
      x,
      y,
      mainImage,
      pushImage,
      blockImage
    );

    button.setEventMode("static");

    return button;
  }

  increase(maxMoney) {
    const updatedText = parseInt(this.text.text) + this.betAmount;
    if (updatedText > maxMoney) return;
    this.updateText(updatedText);
  }

  decrease(minMoney) {
    const updatedText = parseInt(this.text.text) - this.betAmount;
    if (this.text.text == this.betAmount || minMoney <= 0) return;
    this.updateText(updatedText);
  }

  updateText(text) {
    return (this.text.text = text);
  }

  setMaxBet(value) {
    this.updateText(value);
  }

  getValue() {
    return parseInt(this.text.text);
  }
}
