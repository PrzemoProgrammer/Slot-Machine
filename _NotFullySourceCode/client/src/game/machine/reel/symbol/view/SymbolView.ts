import AnimatedSprite from "../../../../components/animatedSprite/AnimatedSprite";
import Container from "../../../../components/Container";
import ISymbolViewConfig from "./interface//ISymbolViewConfig";

export default class SymbolView {
    config: ISymbolViewConfig
    sprite: AnimatedSprite 
  constructor(config: ISymbolViewConfig, scene: Container) {//@ts-ignorets
    this.scene = scene
    this.config = config
    this.sprite = this.createSprite()
  }

  private createSprite(): AnimatedSprite  {
    const config = this.config.sprite
    const sprite = new AnimatedSprite(config)//@ts-ignorets
    this.scene.addChild(sprite);
    return sprite
  }

}