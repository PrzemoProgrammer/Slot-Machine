class SceneManager {
  constructor() {
    this.game = {};

    this.scenes = {};
    this.sceneInstances = {};
  }

  addScene(scene) {
    scene.forEach((scene) => {
      const key = { scene }.scene.name;
      this.scenes[key] = scene;
    });

    this.autoStartFirstScene();
  }

  autoStartFirstScene() {
    const keys = Object.keys(this.scenes);
    const firstKey = keys[0];

    this.startScene(firstKey);
  }

  startScene(key) {
    let scene = new this.scenes[key]();
    this.sceneInstances[key] = scene;
    this.game.stage.addChild(scene);
  }

  addGame(game) {
    this.game = game;
  }

  removeScene(key) {
    const scene = this.sceneInstances[key];
    this.game.stage.removeChild(scene);
  }

  deleteScene(key) {
    const scene = this.sceneInstances[key];
    this.game.stage.removeChild(scene);
    delete this.scenes[key];
    delete this.sceneInstances[key];
  }
}

let sceneManager = new SceneManager();

export default sceneManager;
