import Sprite from "../../../components/sprite/Sprite";
import AnimatedSprite from "../../../components/animatedSprite/AnimatedSprite";
import Container from "../../../components/Container";
import Text from "../../../components/text/Text";
// import { SPRITE_CONFIG } from "../config/spinButtonConfig";

export default class DescribeLabelView {
  public background: Sprite;
  public animatedSprite: AnimatedSprite;
  public describeText: Text;

  constructor(scene: Container) {//@ts-ignorets
    this.scene = scene
    this.background = this.createBackground();
    this.animatedSprite = this.createSprite()
    this.describeText = this.createDescribeText()
  }

  private createBackground(): Sprite {
    const config = {
      textureKey: "symbol_describe_label",
      x: -60,
      y: 0,
      scaleX:0.5,
      scaleY:0.5,
      anchorX: 0.5,
      anchorY: 0.5,
    };
    const sprite = new Sprite(config);//@ts-ignorets
    this.scene.addChild(sprite);
    return sprite;
  }

  private createSprite(): AnimatedSprite {
    const config = {
        atlasKey: "orange",
        startWithAnimation: "move",
        isStatic: false,
        loop: false,
        playOnStart: false,
        scaleX: 0.5,
        scaleY: 0.5
    };
    const sprite = new AnimatedSprite(config);//@ts-ignorets
    this.scene.addChild(sprite);
    return sprite;
  }


  private createDescribeText(): Text {
    const config = {
      message: "",
      x: -170,
      y: 0,
      anchorX: 0,
      anchorY: 0.5,
      scaleX:0.5,
      scaleY:0.5,
      // isStatic: true,
      textConfig: {
        fontFamily: "Trebuchet MS",
          fontSize: 50,
          fill: 0xFFFFFF,
          wordWrap: true,
          wordWrapWidth: 340,
      }
    };

    const sprite = new Text(config);//@ts-ignorets
    this.scene.addChild(sprite);
    return sprite;
  }

}
