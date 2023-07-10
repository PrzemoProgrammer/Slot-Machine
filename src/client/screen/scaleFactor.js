import { GAME_HEIGHT, GAME_WIDTH } from "../config";

export function calculateScaleFactor() {
  const scaleFactor = Math.min(
    window.innerWidth / GAME_WIDTH,
    window.innerHeight / GAME_HEIGHT
  );
  return scaleFactor;
}
