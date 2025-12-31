import ImageStorage from "../storage/ImageStorage";

export default class ImageManager {
  static addImage(key, source) {
    ImageStorage.addImage(key, source);
  }

  static getImage(key) {
    return ImageStorage.getImage(key);
  }
}
