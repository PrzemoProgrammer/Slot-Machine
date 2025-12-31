export default class SceneStorage {
  static _scenes = new Map();

  static addScene(scene) {
    const key = scene.sceneKey;
    this._scenes.set(key, scene);
  }

  static getScene(key) {
    return this._scenes.get(key);
  }

  static get scenes() {
    return this._scenes;
  }

  static deleteScene(key) {
    this._scenes.delete(key);
  }
}
