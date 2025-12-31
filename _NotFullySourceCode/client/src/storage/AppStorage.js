export default class AppStorage {
  static _app = null;

  static add(app) {
    this._app = app;
  }

  static get app() {
    return this._app;
  }
}
