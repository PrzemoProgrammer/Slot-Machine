import { calculateScaleFactor } from "../screen/scaleFactor";
import { GAME_HEIGHT, GAME_WIDTH } from "../config";

export default class TextInput {
  constructor(scene, x, y, config) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.config = config;

    this.input = document.createElement("input");

    this.setup();
    this.resize();

    document.body.appendChild(this.input);
    this.addResizeListener();
  }

  setup() {
    this.input.type = "text";
    this.input.id = "login-input";
    this.input.style.position = "absolute";
    // this.input.style.background = "none";
    this.input.style.border = "none";
    this.input.classList.add("no-focus-border");
  }

  resize() {
    const scaleFactor = calculateScaleFactor();
    this.input.style.left = `${this.x * scaleFactor}px`;
    this.input.style.top = `${this.y * scaleFactor}px`;
    this.input.style.width = `${this.config.width * scaleFactor}px`;
    this.input.style.height = `${this.config.height * scaleFactor}px`;
    this.input.style.fontSize = `${this.config.fontSize * scaleFactor}px`;
  }

  onTextChange(callback) {
    this.handleInputChange = () => {
      const text = this.input.value;
      callback({ text });
    };

    this.input.addEventListener("input", this.handleInputChange);
  }

  onFocus(callback) {
    this.handleInputFocus = () => {
      callback();
    };

    this.input.addEventListener("focus", this.handleInputFocus);
  }

  onBlur(callback) {
    this.handleInputBlur = () => {
      callback();
    };

    this.input.addEventListener("blur", this.handleInputBlur);
  }

  calculateScaleFactor() {
    const scaleFactor = Math.min(
      window.innerWidth / GAME_WIDTH,
      window.innerHeight / GAME_HEIGHT
    );
    return scaleFactor;
  }

  addResizeListener() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  removeResizeListener() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  destroy() {
    this.input.removeEventListener("input", this.handleInputChange);
    this.input.removeEventListener("focus", this.handleInputFocus);
    this.input.removeEventListener("blur", this.handleInputBlur);
    this.removeResizeListener();

    this.input.parentNode.removeChild(this.input);
  }
}
