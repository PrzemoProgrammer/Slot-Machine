// import { Application } from "pixi.js";
import AppStorage from "../storage/AppStorage";

export default class AppManager {
  static get app() {
    return AppStorage.app;
  }
  static addChild(instance) {
    this.app.stage.addChild(instance);
  }
  static removeChild(instance) {
    this.app.stage.removeChild(instance);
  }
  static addToTicker(updateFunction) {
    this.app.ticker.add(updateFunction);
  }
}
