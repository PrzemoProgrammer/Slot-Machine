export default class HandleInput {
  constructor(scene) {
    this.scene = scene;

    this.addEventListener();
  }

  keyboardHandler(event) {
    if (event.key === "ArrowUp") {
      this.scene.enemy.y -= 5;
    }
    if (event.key === "ArrowDown") {
      this.scene.enemy.y += 5;
    }
    if (event.key === "ArrowLeft") {
      this.scene.enemy.x -= 5;
    }
    if (event.key === "ArrowRight") {
      this.scene.enemy.moveRight();
      // this.scene.enemy.x += 5;
    }
  }

  addEventListener() {
    document.addEventListener("keydown", this.keyboardHandler.bind(this));
  }
}
