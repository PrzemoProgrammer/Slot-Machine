import { Howl, Howler } from "howler";

class AssetsManager {
  constructor() {
    this.images = {};
    this.animateFrames = {};
    this.spriteSheetJSON = {};
    this.audios = {};
  }

  addImage(key, source) {
    this.images[key] = source;
  }

  getImage(key) {
    return this.images[key];
  }

  addAudio(key, source) {
    const sound = new Howl({
      src: [source],
    });

    this.audios[key] = sound;
  }

  getSound(key) {
    return this.audios[key];
  }

  addAnimateFrames(key, frames) {
    this.animateFrames[key] = frames;
  }

  getAnimFrames(key) {
    return this.animateFrames[key];
  }

  addSpriteSheetJSON(key, source) {
    this.spriteSheetJSON[key] = source;
  }

  getSpriteSheetJSON(key) {
    return this.spriteSheetJSON[key];
  }
}

let assetsManager = new AssetsManager();

export default assetsManager;
