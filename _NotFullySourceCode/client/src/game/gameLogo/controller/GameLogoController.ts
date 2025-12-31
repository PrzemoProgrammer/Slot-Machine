import GameLogoModel from "../model/GameLogoModel";
import GameLogoView from "../view/GameLogoView";
import Container from "../../components/Container";
import {SCREEN_TYPES} from "../../../config/screenConfig";
import  gsap  from 'gsap'; 


export default class GameLogoController  {
   protected _model: GameLogoModel
   protected _view: GameLogoView
   protected _scene: Container
    constructor(model: GameLogoModel, view: GameLogoView, scene: Container) {
        this._scene = scene
        this._model = model
        this._view = view
    }

    private get sprite(){
        return this._view.sprite
    }
     
    private setViewTextureToPortrait(){
        this.sprite.changeTexture(this._model.portraitTexture)
    }
    
    private setViewTextureToLandscape(){
        this.sprite.changeTexture(this._model.landscapeTexture)
    }

    public changeTextureOrientation(key: string){
      if(key === SCREEN_TYPES.portrait) {
        this.setViewTextureToPortrait() 
        this.sprite.y = -35
        this.sprite.scale.x = 0.4,
        this.sprite.scale.y = 0.4
      } else {
        this.setViewTextureToLandscape()
        this.sprite.y = 10
        this.sprite.scale.x = 0.3,
        this.sprite.scale.y = 0.3
      }
    }

    public openTween(){
        this._scene.scale.x = 5
        this._scene.scale.y = 5
        gsap.to( this._scene.scale, {
            x: 1, 
            y: 1,
            duration: 1.5,
            ease: "back.out",
        });
    }
    

}