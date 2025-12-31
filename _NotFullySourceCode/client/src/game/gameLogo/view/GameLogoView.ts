// import AnimatedSprite from "../../components/animatedSprite/AnimatedSprite";
import Sprite from "../../components/sprite/Sprite";
import Container from "../../components/Container";
import IGameLogoConfig from "./interface/IGameLogoConfig";

export default class GameLogoView {
    config: IGameLogoConfig
    sprite: Sprite 
  constructor(config: IGameLogoConfig, scene: Container) {//@ts-ignorets
    this.scene = scene
    this.config = config
    this.sprite = this.createSprite()
  }

  private createSprite(): Sprite  {
    const config = this.config.sprite
    const sprite = new Sprite(config)//@ts-ignorets
     this.scene.addChild(sprite);
    return sprite
  }

}