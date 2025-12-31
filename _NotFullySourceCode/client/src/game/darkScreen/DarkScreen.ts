import { GAME_SAFE_LANDSCAPE_HEIGHT, GAME_SAFE_LANDSCAPE_WIDTH } from "../../config/screenConfig";
import DarkScreenModel from "./model/DarkScreenModel";
import DarkScreenView from "./view/DarkScreenView";
import DarkScreenController from "./controller/DarkScreenController";
import Container from "../components/Container";
import darkScreenConfig from "./config/darkScreenConfig";

export default class DarkScreen extends Container{
    protected _model: DarkScreenModel
    protected _view: DarkScreenView
    protected _controller: DarkScreenController

    constructor() {
      super()
        this._view = new DarkScreenView(darkScreenConfig.view, this)
        this._model  = new DarkScreenModel(darkScreenConfig.model)
        this._controller = new DarkScreenController(this._model, this._view, this) 
        this.pivot.set(0 , 0);
        this.x = GAME_SAFE_LANDSCAPE_WIDTH/2 
        this.y = 300
    }

    public startOpenAnimation(){
        this._controller.openTween()
    }

    public startCloseAnimation(){
        this._controller.closeTween()
    }

}