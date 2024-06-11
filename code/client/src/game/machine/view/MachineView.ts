import Container from "../../components/Container";
import Graphics from "../../components/graphics/Graphics";
import {VIEW_CONFIG} from "../config/machineConfig";
import Sprite from "../../components/sprite/Sprite";

export default class MachineView{
    symbolsMask: Graphics 
    background: Sprite
  constructor(scene: Container) {//@ts-ignorets
    this.scene = scene
    this.background =  this.createBackground()//@ts-ignorets
    this.symbolsMask = this.createMask()//@ts-ignorets
  }

  private createMask(): Graphics  {
    const config = VIEW_CONFIG.mask
    const graphics = new Graphics(config);//@ts-ignorets
    this.scene.addChild(graphics)
    return graphics
  }

  private createBackground(): Sprite  {
    const config = VIEW_CONFIG.background
    const sprite = new Sprite(config);//@ts-ignorets
    this.scene.addChild(sprite)
    return sprite
  }

}