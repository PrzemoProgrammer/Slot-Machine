export default interface ISpriteConfig {
    textureKey: string;
    x?: number;
    y?: number;
    anchorX?: number;
    anchorY?: number;
    scaleX?: number, 
    scaleY?: number,
    angle?: number,
    tint?: number,
    eventMode? : string,
    visible?: boolean;
    isStatic?: boolean;
    interactive?: boolean;
  }