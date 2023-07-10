import * as PIXI from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../config";

export default class LoadingScreen {
  constructor(scene) {
    this.scene = scene;
    this.gw = GAME_WIDTH;
    this.gh = GAME_HEIGHT;

    this.totalAssets = null;
    this.loadedAssets = null;

    this.gb = this.createBackground();
    this.progressBarText = this.createProgressBarText(
      this.gw / 2,
      this.gh / 2 + 250
    );
    this.progressBar = this.createProgressBar(
      this.gw / 2 - 100,
      this.gh / 2 + 280
    );

    this.logo = this.createLogo(this.gw / 2, this.gh / 2 - 200);
  }

  createBackground() {
    const bg = PIXI.Sprite.from("assets/images/preloadBg.png");
    bg.anchor.set(0, 0);
    bg.width = this.gw;
    bg.height = this.gh;
    this.scene.addChild(bg);
    return bg;
  }

  createLogo(x, y) {
    const logo = PIXI.Sprite.from("assets/images/loadingLogo.png");
    logo.anchor.set(0.5);
    logo.position.set(x, y);
    this.scene.addChild(logo);
    return logo;
  }

  createProgressBar(x, y) {
    const progressBar = new PIXI.Graphics()
      .lineStyle(2, 0xffffff)
      .drawRect(0, 0, 200, 20);
    progressBar.position.set(x, y);
    this.scene.addChild(progressBar);
    return progressBar;
  }

  createProgressBarText(x, y) {
    const progressText = PIXI.Sprite.from("assets/images/loadingText.png");
    progressText.anchor.set(0.5);
    progressText.position.set(x, y);

    this.scene.addChild(progressText);
    return progressText;
  }

  updateProgressBar() {
    this.loadedAssets += 1;
    let progress = this.loadedAssets / this.totalAssets;

    this.progressBar.clear();
    this.progressBar.beginFill(0xffffff);
    this.progressBar.drawRect(0, 0, progress * 200, 20);
    this.progressBar.endFill();
  }

  addAssetsCount(value) {
    this.totalAssets = value;
  }
}
