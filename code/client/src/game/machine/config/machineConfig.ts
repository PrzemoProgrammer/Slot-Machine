import { GAME_SAFE_LANDSCAPE_HEIGHT, GAME_SAFE_LANDSCAPE_WIDTH } from "../../../config/screenConfig";

export const MACHINE_CONFIG = {
  x: GAME_SAFE_LANDSCAPE_WIDTH/2,
  y: GAME_SAFE_LANDSCAPE_HEIGHT/2 - 60,
  stopSpinTweenDelay: 2,
};

export const REELS_CONFIG = {
  columns: 5,
  spaceX: 130,
};

export const REEL_SYMBOLS_CONFIG = {
  count: 4,
  spaceY: 160,
  positionsY: [0, 160, 320, 480]
};

export const REEL_SPIN_TWEEN_CONFIG = {
  delayMultiplier: 0.03,
  symbolMoveDownLimitY: 640, //FIRST SYMBOL POSITION X + SYMBOL COUNT IN REEL* SYMBOL OFFSET Y
  symbolMoveSpeed: 30,
  offsetY: 160,
  repeat: -1,
};

export const REEL_STOP_SPIN_TWEEN_CONFIG = {
  newY: 160,
  duration: 0.5, //0.1
  ease: "back.out(1)",
};

export const VIEW_CONFIG = {
  mask: {
    x: -78, 
    y: 75, 
    w: 675,
    h: 487,
  },
  background: {
    textureKey: "symbols_bg",
    x: 260,
    y: 320,
    scaleX: 0.6,
    scaleY: 0.6,
  },
};

