export default interface ITextConfig {
    message: string | number;
    x?: number;
    y?: number;
    scaleX?: number,
    scaleY?: number,
    anchorX?: number;
    anchorY?: number;
    visible?: boolean;
    isStatic?: boolean
    textConfig?: {
        fontFamily?: string,
        fontSize?: number,
        fill?: number, 
        wordWrap?: boolean
        wordWrapWidth?: number
    }
  }