import Sprite from "../../../components/sprite/Sprite";
// import Text from "../../../components/text/Text";
import Container from "../../../components/Container";
import * as PIXI from "pixi.js";

// import { SPRITE_CONFIG } from "../config/spinButtonConfig";

export default class CreditsCounterView {
  public shine: Sprite;
  public creditsText: PIXI.BitmapText;
  constructor(scene: Container) {//@ts-ignorets
    this.scene = scene
    this.shine = this.createShine();
    this.creditsText = this.createCreditsText();
  }

  private createShine(): Sprite {
    const config = {
      textureKey: "credits_counter_background",
      isStatic: false,
      visible: true,
      scaleX: 0.6,
      scaleY: 0.6,
    };
    const sprite = new Sprite(config);//@ts-ignorets
    this.scene.addChild(sprite);
    return sprite;
  }

  private createCreditsText(): PIXI.BitmapText {
      const config={        
        fontName: 'Desyrel',
        fontSize: 100,
            align: 'right',
        }
//@ts-ignorets
    const text = new PIXI.BitmapText("0", config);//@ts-ignorets
    this.scene.addChild(text);
    text.visible = true
    text.x = 0
    text.y = 0
    text.scale.x = 0.5;
    text.scale.y = 0.5;
    text.anchor.set(0.5, 0.5);
    text.pivot.set(0.5 , 0.5);
    return text;
  }
}

