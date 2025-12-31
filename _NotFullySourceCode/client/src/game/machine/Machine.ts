import MachineController from "./controller/MachineController";
import MachineView from "./view/MachineView";
import MachineModel from "./model/MachineModel";
import ReelsStorage from "./reelsStorage/ReelsStorage";
import MatchLine from "./matchLine/MatchLine";
import CreditsCounter from "./creditsCounter/CreditsCounter";
import MatchFrame from "./matchFrame/MatchFrame";
import Container from "../components/Container";
import DescribeLabel from "./describeLabel/DescribeLabel";
import { MACHINE_CONFIG } from "./config/machineConfig";

export default class Machine extends Container {
  protected _view: MachineView;
  protected _model: MachineModel;
  protected _controller: MachineController;
  protected _reelsStorage: ReelsStorage;
  protected _matchLine: MatchLine
  protected _matchFrame: MatchFrame
  protected _creditsCounter: CreditsCounter
  protected _describeLabel: DescribeLabel
  constructor() {
    const { x, y } = MACHINE_CONFIG;
    super();
    this._model = new MachineModel()
    this._view = new MachineView(this);
    this._matchLine = new MatchLine(this)
    this._reelsStorage = new ReelsStorage(this);
    this._matchFrame = new MatchFrame(this)
    this._creditsCounter = new CreditsCounter(this)
    this._describeLabel = new DescribeLabel()
    this._controller = new MachineController(this, this._view, this._model, this._reelsStorage, this._matchLine, this._matchFrame,  this._creditsCounter, this._describeLabel);
    this.pivot.set(this.width / 2 - 95, this.height / 2 + 35);
    this.x = x
    this.y = y
  }

  public startSpinning() {
     this._controller.startSpinReels();
  }

  public async stopSpinning(newSymbols: number[]) {
    await this._controller.stopSpinReels(newSymbols);
  }

  public reset(){
    this._controller.resetReels()
  }

  public async showMatches(horizontalMatches: any, verticalMatches: any, totalCreditsWin: any, matchLineCredits: any, async: boolean){
    await this._controller.handleShowMatches(horizontalMatches, verticalMatches, totalCreditsWin, matchLineCredits, async)
  }

  public startOpenAnimation(){
    this._controller.openTween()
  }

  public get isRestarted(){
    return  this._model._isRestarted
  }
}
