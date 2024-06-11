export default class MathUtils {
    static getRandomNumberFloor(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    static getRandomNumber(min: number, max: number) {
      return Math.random() * (max - min + 1) + min;
    }
  }
  