import * as PIXI from "pixi.js";
import ImageManager from "../../../managers/ImageManager";
import ISpriteConfig from "./interface/ISpriteConfig";

export default class Sprite extends PIXI.Sprite {
  constructor(config: ISpriteConfig) {
    const {
      textureKey,
      x = 0,
      y = 0,
      anchorX = 0.5,
      anchorY = 0.5,
      visible = true,
      scaleX = 1,
      scaleY = 1,
      angle = 0,
      tint =  0xFFFFFF,
      isStatic = true,
      interactive = false,
      eventMode = "none"
    } = config;
    const spriteTexture = ImageManager.getImage(textureKey)

      super(spriteTexture);
      this.anchor.set(anchorX, anchorY);
      this.position.set(x, y);
      this.scale.x = scaleX;
      this.scale.y = scaleY;
      this.angle = angle;
      this.tint =  tint;
      this.visible = visible;
      this.filters = null;//@ts-ignorets
      this.eventMode = eventMode
      this.interactiveChildren = interactive;
      this.cacheAsBitmap = isStatic;
  }

  public changeTexture(newTexture: string) {
    const updatedTexture = ImageManager.getImage(newTexture);
    if (updatedTexture) {
      this.texture = updatedTexture
    } else {
      console.error(`Image with key "${newTexture}" not found.`);
    }
  }

  public setVisible(value: boolean) {
    this.visible = value;
  }
}
