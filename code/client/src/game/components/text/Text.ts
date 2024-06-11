import * as PIXI from "pixi.js";
import ITextConfig from "./interface/ITextConfig";

export default class Text extends PIXI.Text {
    constructor(config: ITextConfig) {
        const {
            message,
            x = 0,
            y = 0,
            anchorX = 0,
            anchorY = 0,
            visible = true,
            isStatic = false,
            scaleX = 1,
            scaleY = 1,
            textConfig: {
                fontFamily = "Arial",
                fontSize = 55,
                fill = 0x000000,
                wordWrap = false,
                wordWrapWidth = 100,
            } = {}
        } = config;
//@ts-ignorets
        super(message, { fontFamily, fontSize, fill, wordWrap, wordWrapWidth});

        this.anchor.set(anchorX, anchorY);
        this.position.set(x, y);
        this.visible = visible;
        this.scale.x = scaleX;
        this.scale.y = scaleY;
        this.cacheAsBitmap = isStatic;
        this.updateMessage(message);
    }

    public updateMessage(updatedText: string | number) {
        this.text = updatedText;
    }
}