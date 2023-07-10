import * as PIXI from "pixi.js";

export default class FireFrame extends PIXI.AnimatedSprite {
  constructor(scene, x, y, spritesheet) {
    super(spritesheet.animations["move"]);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.position.set(this.x, this.y);
    this.anchor.set(0.5, 0.5);
    this.alpha = 0;
    this.moveLimitY = 1000;
    this.animationSpeed = 0.5;
    this.loop = false;

    // this.play();
    // this.gotoAndStop(0);

    this.scene.addChild(this);
  }

  playAnim(x) {
    this.x = x;
    this.alpha = 1;
    this.play();
    this.onComplete = () => {
      this.alpha = 0;
      this.gotoAndStop(0);
    };
  }

  //   setTexture(texture) {
  //     this.textures = texture.animations["move"];
  //     this.gotoAndStop(0);
  //   }
}
