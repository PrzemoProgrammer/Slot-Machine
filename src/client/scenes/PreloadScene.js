import * as PIXI from "pixi.js";
import sceneManager from "../utility/SceneManager";
import LoadingScreen from "../components/LoadingScreen";
import AssetsManager from "../utility/AssetsManager";
import Cookies from "js-cookie";

export default class PreloadScene extends PIXI.Container {
  constructor() {
    super("PreloadScene");

    this.loadingScreen = this.addLoadingScreen();
    this.loadAssets();
  }

  addLoadingScreen() {
    return new LoadingScreen(this);
  }

  async loadAssets() {
    await this.loadImages();
    await this.loadAudio();
    await this.loadMachineFrameAnim();
    await this.addMatchLines();
    await this.loadInterfaceImages();
    await this.addSpineButtonAnim();
    await this.addBuyCoinsButtonAnim();
    await this.loadSymbolsJSON();
    await this.loadFireFrame();
    await this.loadInformationWindows();
    await this.loadShop();

    this.startNextScene();
  }

  async loadImages() {
    const images = [
      "playBg",
      "menuBg",
      "playButton",
      "pauseButton",
      "registerButton",
      "backButton",
      "darkScreen",
    ];

    let totalImages = images.length;

    for (let i = 0; i < totalImages; i++) {
      let sprite = images[i];

      let source = await PIXI.Assets.load(`assets/images/${sprite}.png`);

      AssetsManager.addImage(sprite, source);
    }
  }

  async loadMachineFrameAnim() {
    const maxFrames = 16;
    const frames = [];

    for (let i = 0; i <= maxFrames; i++) {
      let texture = await PIXI.Assets.load(
        `assets/images/interface/machineFrame/frame_${i}.png`
      );

      frames.push(texture);
    }

    AssetsManager.addAnimateFrames("machine_frames", frames);
  }

  async addMatchLines() {
    const _lines = [];

    for (let i = 1; i <= 20; i++) {
      let texture = await PIXI.Assets.load(`assets/images/lines/Line${i}.png`);
      _lines.push(texture);
    }

    AssetsManager.addImage("lines", _lines);
  }

  async loadInterfaceImages() {
    const images = [
      "coin",
      "total_bet_label",
      "win_label",
      "coin_label",
      "bottom_bar",
      "top_bar",
      "spin_button_block",
      "spin_button_bg",
      "buy_coins_button_block",
      "plus_button",
      "plus_button_push",
      "plus_button_block",
      "minus_button",
      "minus_button_push",
      "minus_button_block",
      "max_bet_button",
      "max_bet_button_push",
      "max_bet_button_block",
      "info_button",
      "info_button_push",
      "collect_button",
      "collect_button_push",
      "buy_button",
      "buy_button_push",
      "close_button",
      "close_button_push",
    ];

    let totalImages = images.length;

    for (let i = 0; i < totalImages; i++) {
      let image = images[i];

      let source = await PIXI.Assets.load(
        `assets/images/interface/${image}.png`
      );

      AssetsManager.addImage(image, source);
    }
  }

  async addSpineButtonAnim() {
    const image = "spin_button_";

    const images = [];

    let totalImages = 99;

    for (let i = 1; i <= totalImages; i++) {
      let texture = await PIXI.Assets.load(
        `assets/images/interface/spin_button/${image}${i}.png`
      );
      images.push(texture);
    }

    AssetsManager.addImage("spin_button_frames", images);
  }

  async addBuyCoinsButtonAnim() {
    const image = "buy_coins_button_";

    const images = [];

    let totalImages = 40;

    for (let i = 1; i <= totalImages; i++) {
      let texture = await PIXI.Assets.load(
        `assets/images/interface/buy_coins_button/${image}${i}.png`
      );
      images.push(texture);
    }

    AssetsManager.addImage("buy_coins_button_frames", images);
  }

  async loadSymbolsJSON() {
    const allSymbols = [];

    const images = [
      "orange", //0
      "lemon", //1
      "plum", //2
      "banana", //3
      "cherry", //4
      "grapes", //5
      "watermelon", //6
      "bar", //7
      "seven", //8
      "strawberry", //9
      "bell", //10
    ];
    let totalImages = images.length;

    for (let i = 0; i < totalImages; i++) {
      let sprite = images[i];

      let source = await PIXI.Assets.load(
        `assets/images/symbols/${sprite}.json`
      );

      allSymbols.push(source);
    }

    AssetsManager.addSpriteSheetJSON("symbols", allSymbols);
  }

  async loadFireFrame() {
    let source = await PIXI.Assets.load(
      `assets/images/interface/frames/fire_frame.json`
    );

    AssetsManager.addSpriteSheetJSON("fire_frame", source);
  }

  async addBuyCoinsButtonAnim() {
    const image = "buy_coins_button_";

    const images = [];

    let totalImages = 40;

    for (let i = 1; i <= totalImages; i++) {
      let texture = await PIXI.Assets.load(
        `assets/images/interface/buy_coins_button/${image}${i}.png`
      );
      images.push(texture);
    }

    AssetsManager.addImage("buy_coins_button_frames", images);
  }

  async loadInformationWindows() {
    const window = ["win_coins"];
    let totalWindows = window.length;

    for (let i = 0; i < totalWindows; i++) {
      let sprite = window[i];

      const source = await PIXI.Assets.load(
        `assets/images/info_window/${sprite}/${sprite}.json`
      );

      AssetsManager.addSpriteSheetJSON(sprite, source);
    }
  }

  async loadShop() {
    let source = await PIXI.Assets.load(
      `assets/images/shop/buy_coins_window.png`
    );

    AssetsManager.addImage("buy_coins_window", source);
  }

  async loadAudio() {
    const audios = ["hurt"];

    let totalAudios = audios.length;

    for (let i = 0; i < totalAudios; i++) {
      let audio = audios[i];
      let source = `assets/audio/${audio}.mp3`;

      AssetsManager.addAudio(audio, source);
    }
  }

  startNextScene() {
    Cookies.get("loginToken")
      ? sceneManager.startScene("PlayScene")
      : sceneManager.startScene("MenuScene");
    sceneManager.removeScene("PreloadScene");
  }
}
