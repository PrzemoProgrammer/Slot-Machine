import * as PIXI from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../config";
import sceneManager from "../utility/SceneManager";
import Button from "../components/Button";
import AssetsManager from "../utility/AssetsManager";
import TextInput from "../components/TextInput";
import { REGISTER } from "../services/requests/requests";

export default class RegisterScene extends PIXI.Container {
  constructor() {
    super();

    this.login = "";
    this.password = "";

    this.bg = this.addBackground(0, 0);
    this.addBackButton = this.addBackButton(50, 50);
    this.registerButton = this.addRegisterButton(
      GAME_WIDTH / 4,
      GAME_HEIGHT / 2
    );
    this.loginPlaceholder = this.addLoginPlaceholder(GAME_WIDTH / 2 + 200, 200);
    this.registerPlaceholder = this.addRegisterPlaceholder(
      GAME_WIDTH / 2 + 200,
      400
    );
  }

  addBackground(x, y) {
    const sprite = AssetsManager.getImage("menuBg");

    const bg = PIXI.Sprite.from(sprite).setTransform(
      x,
      y,
      GAME_WIDTH,
      GAME_HEIGHT
    );

    this.addChild(bg);
    return bg;
  }

  addBackButton(x, y) {
    const sprite = AssetsManager.getImage("backButton");
    const button = new Button(this, x, y, sprite);

    button.setEventMode("static");

    button.onClick(() => {
      this.removePlaceholders();
      this.startScene("MenuScene");
    });

    return button;
  }

  addRegisterButton(x, y) {
    const sprite = AssetsManager.getImage("registerButton");
    const button = new Button(this, x, y, sprite);

    button.setEventMode("static");

    button.onClick(async () => {
      const { login, password } = this;

      const registerData = await (await REGISTER({ login, password })).json();

      registerData.success
        ? console.log(registerData)
        : console.log(!registerData);
    });

    return button;
  }

  startScene(scene) {
    sceneManager.startScene(scene);
    sceneManager.removeScene("RegisterScene");
    // game.stage.addChild(new PlayScene());
    // this.destroy();
  }

  addLoginPlaceholder(x, y) {
    const login = new TextInput(this, x, y, {
      width: 300,
      height: 100,
      fontSize: 30,
    });

    login.onTextChange(({ text }) => {
      this.login = text;
    });

    return login;
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
    this.loginPlaceholder.destroy();
    this.registerPlaceholder.destroy();
  }
}
