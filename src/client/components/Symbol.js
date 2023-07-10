import * as PIXI from "pixi.js";

export default class Symbol extends PIXI.AnimatedSprite {
  constructor(scene, x, y, spritesheet) {
    super(spritesheet.animations["move"]);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.position.set(this.x, this.y);
    this.anchor.set(0.5, 0.5);
    this.moveLimitY = 1000;
    this.animationSpeed = 0.5;
    this.loop = false;

    // this.play();
    // this.gotoAndStop(0);

    this.scene.addChild(this);

    this.tween = "";
  }

  playAnim() {
    this.play();
    this.onComplete = () => {
      this.gotoAndStop(0);
    };
  }

  setTexture(texture) {
    this.textures = texture.animations["move"];
    this.gotoAndStop(0);
  }
}
