import { GAME_SAFE_LANDSCAPE_HEIGHT, GAME_SAFE_LANDSCAPE_WIDTH } from "../../../config/screenConfig";
import CreditsCounterModel from "./model/CreditsCounterModel";
import CreditsCounterView from "./view/CreditsCounterView";
import CreditsCounterController from "./controller/CreditsCounterController";
import Container from "../../components/Container";

export default class CreditsCounter extends Container {
  private _model: CreditsCounterModel;
  private _view: CreditsCounterView;//@ts-ignorets
  private _controller: CreditsCounterController;

  constructor(scene: Container) {
    super();
    scene.addChild(this)
    this.x = 260
    this.y = 319 
    this._view = new CreditsCounterView(this);
    this._model = new CreditsCounterModel();
    this._controller = new CreditsCounterController(this, this._model, this._view);
  }

  public async startCounter(creditCount: number){
    await this._controller.startCounter(creditCount)
  }

  public async showCreditCount(credits: number){
    await this._controller.showCreditCount(credits)
  }

  public hideCreditCount(){
    this._controller.hideCreditCount()
  }

  public stopTweens(){
    this._controller.stopTweens()
  }


}
