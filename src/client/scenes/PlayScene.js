import * as PIXI from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../config";
import Button from "../components/Button";
import HandleInput from "../utility/HandleInputs";
import sceneManager from "../utility/SceneManager";
import AssetsManager from "../utility/AssetsManager";
import MachineFrame from "../components/MachineFrame";
import Symbol from "../components/Symbol";
import MatchLine from "../components/MatchLine";
import Label from "../components/Label";
import AnimatedButton from "../components/AnimatedButton";
import TotalBet from "../components/TotalBet";
import CoinLabel from "../components/CoinLabel";
import FireFrame from "../components/FireFrame";
import { getRandomNumber } from "../helpers/getRandomNumber";
import gsap from "gsap";
import {
  SPIN,
  GAME_STATE,
  CREATE_PAYMENT,
} from "../services/requests/requests";
import { ROWS, COLUMNS } from "../../shared/config";
import AnimateLabel from "../components/AnimateLabel";
import Shop from "../components/Shop";
import Cookies from "js-cookie";

export default class PlayScene extends PIXI.Container {
  constructor() {
    super();

    this.create();
  }

  async create() {
    this.gw = GAME_WIDTH;
    this.gh = GAME_HEIGHT;
    this.width = GAME_WIDTH;
    this.height = GAME_HEIGHT;

    this.symbols = [[]];
    this.visibleSymbolsCoordinates = [[]];
    this.drawnSymbols = [[]];
    this.symbolRolls = [];

    this.elapsedTime = 0.0;
    this.isPaused = false;
    this.isSpinning = false;
    this.symbolsTextures = this.getSymbols();
    this.symbolOffsetY = 250;
    this.columns = COLUMNS;
    this.rows = ROWS;
    this.loginToken = Cookies.get("loginToken");

    this.bg = this.addBackground();
    this.machineFrame = this.addMachineFrame(0, 0);
    this.symbols = this.createSymbols();
    this.fireFrame = this.createFireFrame(this.gw / 2, this.gh / 2);
    this.matchLine = this.createMatchLine(this.gw / 2, this.gh / 2);
    this.topBar = this.addTopBar(0, 0);
    this.bottomBar = this.addBottomBar(0, this.gh);
    this.spinButton = this.createSpinButton(this.gw - 240, this.gh - 90);
    this.buyCoinButton = this.createBuyCoinButton(this.gw / 2 - 35, 55);
    this.winLabel = this.addWinLabel(this.gw / 2, this.gh);
    this.totalBetLabel = this.addTotalBetLabel(this.gw / 2 - 625, this.gh);
    this.gameState = await this.getGameStateFromServer();
    this.coinLabel = this.addCoinLabel(100, 50);
    this.pauseButton = this.addPauseButton(this.gw - 60, 50);
    this.winCoinLabel = this.createWinCoinLabel(this.gw, this.gh);
    this.shop = this.createShop(this.gw, this.gh);

    this.handleInput = new HandleInput(this);
    this.updateGame();
  }

  updateGame() {
    sceneManager.game.ticker.add((delta) => {
      if (this.isPaused) return;
    });
  }

  addBackground() {
    const sprite = AssetsManager.getImage("playBg");
    let bg = new PIXI.Sprite(sprite);

    bg.anchor.set(0, 0);
    bg.width = this.gw;
    bg.height = this.gh;

    this.addChild(bg);
    return bg;
  }

  async getGameStateFromServer() {
    const token = this.loginToken;

    try {
      const gameState = await (await GAME_STATE({ clientToken: token })).json();
      return gameState;
    } catch (error) {
      console.log(error);
    }
  }

  addMachineFrame(x, y) {
    const frames = AssetsManager.getAnimFrames("machine_frames");

    return new MachineFrame(this, x, y, frames);
  }

  getSymbols() {
    return AssetsManager.getSpriteSheetJSON("symbols");
  }

  addTopBar(x, y) {
    const sprite = AssetsManager.getImage("top_bar");
    let topBar = new PIXI.Sprite(sprite);

    topBar.anchor.set(0, 0);
    topBar.position.set(x, y);

    this.addChild(topBar);
    return topBar;
  }

  addBottomBar(x, y) {
    const sprite = AssetsManager.getImage("bottom_bar");
    let bottomBar = new PIXI.Sprite(sprite);

    bottomBar.anchor.set(0, 1);
    bottomBar.position.set(x, y);

    this.addChild(bottomBar);
    return bottomBar;
  }

  addWinLabel(x, y) {
    const sprite = AssetsManager.getImage("win_label");
    const label = new Label(this, x, y, sprite);

    return label;
  }

  addTotalBetLabel(x, y) {
    const sprite = AssetsManager.getImage("total_bet_label");
    const label = new TotalBet(this, x, y, sprite);

    label.minusButton.staticOnClick(() => {
      label.decrease(this.coinLabel.getValue());
    });

    label.plusButton.staticOnClick(() => {
      label.increase(this.coinLabel.getValue());
    });

    label.maxBetButton.staticOnClick(() => {
      if (this.coinLabel.getValue() === 0) return;
      label.setMaxBet(this.coinLabel.getValue());
    });

    return label;
  }

  addCoinLabel(x, y) {
    const sprite = AssetsManager.getImage("coin_label");
    const label = new CoinLabel(this, x, y, sprite);
    const money = this.gameState.money;

    label.setAnchor(0, 0.5);
    label.setTextPosition(label.x + 100, label.y);
    label.updateText(money);

    return label;
  }

  addPauseButton(x, y) {
    const mainImage = AssetsManager.getImage("info_button");
    const pushImage = AssetsManager.getImage("info_button_push");

    const button = new Button(this, x, y, mainImage, pushImage);

    button.setEventMode("static");

    button.staticOnClick(() => {
      this.togglePause();
    });

    return button;
  }

  addSymbol(x, y, texture) {
    let symbol = new Symbol(this, x, y, texture);

    symbol.position.set(x, y);
    symbol.anchor.set(0.5, 0.5);

    this.addChild(symbol);
    return symbol;
  }

  createMatchLine(x, y) {
    const sprites = AssetsManager.getImage("lines");
    return new MatchLine(this, x, y, sprites);
  }

  createSymbols() {
    const symbolsSprites = [];

    for (let i = 0; i < this.columns; i++) {
      symbolsSprites[i] = [];

      const roll = new PIXI.Container();
      this.addChild(roll);
      this.symbolRolls[i] = roll;

      for (let j = 0; j < this.rows; j++) {
        symbolsSprites[i][j] = [];

        let x = 270 * i + 415;
        let y = this.symbolOffsetY * j; //+250

        const texture = this.getRandomSymbolTexture();

        const symbol = this.addSymbol(x, y, texture);

        symbolsSprites[i][j] = symbol;
        this.symbolRolls[i].addChild(symbolsSprites[i][j]);
      }
    }

    return symbolsSprites;
  }

  getRandomSymbolTexture() {
    const randomTextureIndex = getRandomNumber(
      0,
      this.symbolsTextures.length - 1
    );
    const texture = this.symbolsTextures[randomTextureIndex];
    return texture;
  }

  startRollsMoveAnim() {
    const rolls = this.symbolRolls;

    for (let i = 0; i < rolls.length; i++) {
      let roll = rolls[i];
      const time = 0.05 + i * 0.01; // 0.1 + i * 0.05
      const targetY = roll.y + this.symbolOffsetY;

      roll.tween = gsap.to(roll, {
        y: targetY,
        duration: time,
        ease: "none",
        repeat: -1,
        delay: i * 0.1,
        onRepeat: () => {
          this.resetRollsPosition(roll);
        },
      });
    }
  }

  resetRollsPosition(roll) {
    let symbol = roll.children.pop();
    roll.children.unshift(symbol);

    for (let j = 0; j < roll.children.length; j++) {
      roll.children[j].y = this.symbolOffsetY * j; //+250
    }
  }

  createSpinButton(x, y) {
    this.addSpinButtonBackground(x, y);
    const frames = AssetsManager.getImage("spin_button_frames");
    const image = AssetsManager.getImage("spin_button_block");

    const button = new AnimatedButton(this, x, y, frames, [image]);
    button.setEventMode("static");

    button.onClick(() => {
      const totalBet = this.totalBetLabel.getValue();
      const coinValue = this.coinLabel.getValue();

      if (totalBet > coinValue || totalBet <= 0) {
        this.spinButton.turnOn();
        return;
      }

      if (this.isSpinning) return;

      this.winLabel.resetText();
      this.isSpinning = true;
      this.coinLabel.decrease(totalBet);
      this.startSpin(totalBet);
    });

    return button;
  }

  async startSpin(totalBetValue) {
    const token = this.loginToken;
    const totalBet = {
      bet: totalBetValue,
      token: token,
    };

    this.startRollsMoveAnim();

    try {
      const spinData = await (await SPIN(totalBet)).json();

      gsap.delayedCall(1, () => {
        this.stopSpin(spinData);
      });
    } catch (error) {
      console.log(error);
    }
  }

  stopSpin(spinData) {
    const { textures, horizontalMatches, verticalMatches, moneyWon } = spinData;
    console.log(spinData);

    const texturesFromServer = textures;

    for (let i = 0; i < this.symbolRolls.length; i++) {
      const roll = this.symbolRolls[i];

      this.stopRollAnim(roll);
      this.resetRollsPosition(roll);
      this.setRollSymbolsTexture(i, texturesFromServer);

      const rollAnimEndCallback = () => {
        this.checkWins(i, horizontalMatches, verticalMatches, moneyWon);
      };

      this.startStopRollAnim(i, rollAnimEndCallback);
    }
  }
  // fireFrame.playAnim(this.gw / 2);
  async playMatchesEffects(matches) {
    const { symbolsIndex, lineIndex } = matches;

    for (let i = 0; i < symbolsIndex.length; i++) {
      for (let j = 0; j < symbolsIndex[i].length; j++) {
        this.symbolRolls[j].children[symbolsIndex[i][j] + 1].playAnim();
      }

      await this.matchLine.addNewLine(lineIndex[i] - 1);
    }
  }

  async playVerticalMatches(matches) {
    for (let i = 0; i < matches.length; i++) {
      let x = matches[i];
      await this.fireFrame.playAnim(x);
    }
  }

  async checkWins(index, horizontalMatches, verticalMatches, moneyWon) {
    const roll = this.symbolRolls[index];
    const rollsCount = this.symbolRolls.length - 1;
    const isLastRollAnimEnd = index === rollsCount;

    roll.y = 0;
    this.resetRollsPosition(roll);

    if (isLastRollAnimEnd) {
      this.playVerticalMatches(verticalMatches);
      await this.playMatchesEffects(horizontalMatches);
      this.coinLabel.updateText(this.coinLabel.getValue() + moneyWon);
      this.winLabel.updateText(moneyWon);

      if (moneyWon == 0) {
        this.restartSpinButton();
        return;
      }
      this.winCoinLabel.activeAndPlay(moneyWon);
    }
  }

  startStopRollAnim(index, cb) {
    const roll = this.symbolRolls[index];
    const time = 0.5 + index * 0.2;

    gsap.to(roll, {
      y: roll.y + this.symbolOffsetY,
      duration: time,
      ease: "back.out",
      onUpdate: () => {},
      onComplete: () => {
        cb();
      },
    });
  }

  setRollSymbolsTexture(i, textures) {
    const roll = this.symbolRolls[i];
    const rollSymbolsLength = roll.children.length;

    for (let j = 0; j < rollSymbolsLength; j++) {
      const textureIndex = textures[i][j];
      const texture = this.symbolsTextures[textureIndex];
      roll.children[j].setTexture(texture);
    }
  }

  stopRollAnim(roll) {
    roll.tween.kill();
    roll.tween = null;
    roll.y = 0;
  }

  addSpinButtonBackground(x, y) {
    const image = AssetsManager.getImage("spin_button_bg");

    let bg = new PIXI.Sprite(image);

    bg.anchor.set(0.5, 0.5);
    bg.position.set(x, y);

    this.addChild(bg);
  }

  createBuyCoinButton(x, y) {
    const frames = AssetsManager.getImage("buy_coins_button_frames");
    const image = AssetsManager.getImage("buy_coins_button_block");

    const button = new AnimatedButton(this, x, y, frames, [image]);
    button.setEventMode("static");

    button.staticOnClick(() => {
      this.shop.show();
    });

    return button;
  }

  togglePause() {
    this.isPaused = !this.isPaused;

    if (this.isPaused) {
      sceneManager.game.ticker.stop();
    } else {
      sceneManager.game.ticker.start();
    }
  }

  restartSpinButton() {
    this.spinButton.turnOn();
    this.isSpinning = false;
  }

  createWinCoinLabel(x, y) {
    const texture = AssetsManager.getSpriteSheetJSON("win_coins");
    const label = new AnimateLabel(this, x, y, texture);

    label.confirmButton.staticOnClick(() => {
      this.restartSpinButton();
      label.reset();
    });
    label.hide();

    return label;
  }

  createShop(x, y) {
    const sprite = AssetsManager.getImage("buy_coins_window");
    const shop = new Shop(this, x, y, sprite);

    shop.closeButton.staticOnClick(() => {
      shop.hide();
    });

    shop.buyButtons.forEach((button, index) => {
      button.staticOnClick(() => {
        const orderNumber = index + 1;
        this.createPayment(orderNumber);
      });
    });

    shop.hide();

    return shop;
  }

  async createPayment(orderNumber) {
    const token = this.loginToken;

    const paymentInfo = await (
      await CREATE_PAYMENT({ clientToken: token, orderNumber })
    ).json();

    window.open(paymentInfo.redirectUrl, "_blank");
    // window.location.href = paymentInfo.redirectUrl;
  }

  createFireFrame(x, y) {
    const sprite = AssetsManager.getSpriteSheetJSON("fire_frame");
    const fireFrame = new FireFrame(this, x, y, sprite);

    return fireFrame;
  }
}
