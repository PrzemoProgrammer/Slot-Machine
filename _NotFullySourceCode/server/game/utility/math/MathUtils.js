module.exports = class MathUtils {
  static getRandomNumberFloor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getRandomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;
  }
};
