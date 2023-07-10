import * as PIXI from "pixi.js";
import AssetsManager from "../utility/AssetsManager";
import Button from "../components/Button";

export default class Shop {
  constructor(scene, x, y, sprite) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    this.buyButtonsCount = 6;

    this.blackBackground = this.createBlackBackground(this.x, this.y);
    this.shopImage = this.createShopImage(this.x / 2, this.y / 2);
    this.closeButton = this.createCloseButton(
      this.shopImage.x + 880,
      this.shopImage.y - 310
    );
    this.buyButtons = this.createBuyButtons();
  }

  createBlackBackground(x, y) {
    const sprite = AssetsManager.getImage("darkScreen");
    let bg = new PIXI.Sprite(sprite);

    bg.anchor.set(0, 0);
    bg.width = x;
    bg.height = y;

    this.scene.addChild(bg);
    return bg;
  }

  createShopImage(x, y) {
    let shop = new PIXI.Sprite(this.sprite);

    shop.anchor.set(0.5, 0.5);
    shop.position.set(x, y);

    this.scene.addChild(shop);
    return shop;
  }

  createCloseButton(x, y) {
    const mainImage = AssetsManager.getImage("close_button");
    const pushImage = AssetsManager.getImage("close_button_push");

    const button = new Button(this.scene, x, y, mainImage, pushImage);

    button.setEventMode("static");

    return button;
  }

  addBuyButton(x, y) {
    const mainImage = AssetsManager.getImage("buy_button");
    const pushImage = AssetsManager.getImage("buy_button_push");

    const button = new Button(this.scene, x, y, mainImage, pushImage);

    button.setEventMode("static");

    return button;
  }

  createBuyButtons() {
    const buttons = [];
    for (let i = 0; i < this.buyButtonsCount; i++) {
      const x = 205 + 300 * i;
      const y = 810;

      const button = this.addBuyButton(x, y);
      buttons.push(button);
    }
    return buttons;
  }

  hide() {
    this.blackBackground.visible = false;
    this.shopImage.visible = false;
    this.closeButton.visible = false;
    this.buyButtons.forEach((button) => {
      button.hide();
    });
    // this.confirmButton.hide();
  }

  show() {
    this.blackBackground.visible = true;
    this.shopImage.visible = true;
    this.closeButton.visible = true;
    this.buyButtons.forEach((button) => {
      button.show();
    });
    // this.confirmButton.show();
  }
}
