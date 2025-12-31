export default class ImageStorage {
  static images = new Map();

  static addImage(key, source) {
    this.images.set(key, source);
  }

  static getImage(key) {
    return this.images.get(key);
  }
}
