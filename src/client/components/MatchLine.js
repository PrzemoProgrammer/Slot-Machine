import * as PIXI from "pixi.js";
import gsap from "gsap";

export default class MatchLine {
  constructor(scene, x, y, sprites) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprites = sprites;

    this.duration = 1;
  }

  async addNewLine(index, cb) {
    const sprite = this.sprites[index];

    const line = new PIXI.Sprite(sprite);
    line.position.set(this.x, this.y);
    line.anchor.set(0.5, 0.5);
    this.scene.addChild(line);

    await gsap.delayedCall(this.duration, async () => {
      await line.destroy();
      this.scene.removeChild(line);
      cb && cb();
    });
  }
}
