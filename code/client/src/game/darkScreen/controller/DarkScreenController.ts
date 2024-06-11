import DarkScreenModel from "../model/DarkScreenModel";
import DarkScreenView from "../view/DarkScreenView";
import Container from "../../components/Container";
import {SCREEN_TYPES} from "../../../config/screenConfig";
import  gsap  from 'gsap'; 


export default class GameLogoController  {
   protected _model: DarkScreenModel
   protected _view: DarkScreenView
   protected _scene: Container
    constructor(model: DarkScreenModel, view: DarkScreenView, scene: Container) {
        this._scene = scene
        this._model = model
        this._view = view
    }

    private get sprite(){
        return this._view.sprite
    }
     
    public openTween(){
        this._scene.scale.x = 0.1
        this._scene.scale.y = 0.1
        this._view.sprite.visible = true
        gsap.to( this._scene.scale, {
            x: 1, 
            y: 1,
            duration: 0.5,
            ease: "back.out",
        });
    }

    public closeTween(){
        gsap.to( this._scene.scale, {
            x: 0.1, 
            y: 0.1,
            duration: 0.6,
            ease: "back.in",
        });
    }
    

}