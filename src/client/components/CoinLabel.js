// import * as PIXI from "pixi.js";
import Label from "../components/Label";

export default class CoinLabel extends Label {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);

    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  increase(value) {
    const updatedText = parseInt(this.text.text) + value;
    this.updateText(updatedText);
  }

  decrease(value) {
    const updatedText = parseInt(this.text.text) - value;
    this.updateText(updatedText);
  }

  updateText(text) {
    return (this.text.text = text);
  }

  getValue() {
    return parseInt(this.text.text);
  }
}
