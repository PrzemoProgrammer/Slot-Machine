import * as PIXI from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../config";
import sceneManager from "../utility/SceneManager";
import Button from "../components/Button";
import AssetsManager from "../utility/AssetsManager";
import TextInput from "../components/TextInput";
import { LOGIN } from "../services/requests/requests";
import Cookies from "js-cookie";

export default class MenuScene extends PIXI.Container {
  constructor() {
    super();

    this.username = "";
    this.password = "";

    this.bg = this.addBackground();
    this.playButton = this.addPlayButton(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 200);
    this.registerButton = this.addRegisterButton(
      GAME_WIDTH / 4,
      GAME_HEIGHT / 2
    );
    this.usernamePlaceholder = this.addUsernamePlaceholder(GAME_WIDTH / 2, 200);
    this.registerPlaceholder = this.addRegisterPlaceholder(GAME_WIDTH / 2, 400);
  }

  addBackground() {
    const sprite = AssetsManager.getImage("menuBg");

    const bg = PIXI.Sprite.from(sprite);
    bg.anchor.set(0, 0);
    this.addChild(bg);
    return bg;
  }

  addPlayButton(x, y) {
    const sprite = AssetsManager.getImage("playButton");
    const playButton = new Button(this, x, y, sprite);

    playButton.setEventMode("static");

    playButton.onClick(async () => {
      const { username, password } = this;

      const loginData = await (await LOGIN({ username, password })).json();

      loginData.success
        ? this.startPlayScene(loginData.token)
        : alert("Wrong username or password");
    });

    return playButton;
  }

  startPlayScene(token) {
    Cookies.set("loginToken", token, { expires: 2 });
    this.startScene("PlayScene");
  }

  addRegisterButton(x, y) {
    const sprite = AssetsManager.getImage("registerButton");
    const button = new Button(this, x, y, sprite);

    button.setEventMode("static");

    button.onClick(() => {
      this.removePlaceholders();
      sceneManager.startScene("RegisterScene");
    });

    return button;
  }

  startScene(scene) {
    this.removePlaceholders();
    sceneManager.startScene(scene);
    sceneManager.deleteScene("MenuScene");
  }

  addUsernamePlaceholder(x, y) {
    const username = new TextInput(this, x, y, {
      width: 300,
      height: 100,
      fontSize: 30,
    });

    username.onTextChange(({ text }) => {
      this.username = text;
    });

    return username;
  }

  addRegisterPlaceholder(x, y) {
    const register = new TextInput(this, x, y, {
      width: 300,
      height: 100,
      fontSize: 30,
    });

    register.onTextChange(({ text }) => {
      this.password = text;
    });

    return register;
  }

  removePlaceholders() {
    this.usernamePlaceholder.destroy();
    this.registerPlaceholder.destroy();
  }
}
