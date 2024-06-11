import { GAME_SAFE_LANDSCAPE_HEIGHT, GAME_SAFE_LANDSCAPE_WIDTH } from "../../config/screenConfig";
import BackgroundModel from "./model/GameLogoModel";
import BackgroundView from "./view/GameLogoView";
import GameLogoController from "./controller/GameLogoController";
import Container from "../components/Container";
import backgroundConfig from "./config/gameLogoConfig";

export default class GameLogo extends Container{
    protected _model: BackgroundModel
    protected _view: BackgroundView
    protected _controller: GameLogoController

    constructor() {
      super()
        this._view = new BackgroundView(backgroundConfig.view, this)
        this._model  = new BackgroundModel(backgroundConfig.model)
        this._controller = new GameLogoController(this._model, this._view, this) 
        this.pivot.set(0 , 0);
        this.x = GAME_SAFE_LANDSCAPE_WIDTH/2 
        this.y = 36
    }

    public changeOrientation(key: string){
        this._controller.changeTextureOrientation(key)
    }

    public startOpenAnimation(){
        this._controller.openTween()
    }

}