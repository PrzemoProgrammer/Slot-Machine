import RollView from "./view/ReelView";
import ReelModel from "./model/ReelModel";
import ReelController from "./controller/ReelController";
import SymbolsStorage from "./symbolsStorage/SymbolsStorage";
import Container from "../../components/Container";;

export default class Reel extends Container {
  private _view: RollView;
  private _model: ReelModel
  private _controller: ReelController
  private _symbolsStorage: SymbolsStorage
  constructor(x: number) {
    super();
    this.x = x;
    this._symbolsStorage = new SymbolsStorage()
    this._view = new RollView(this);
    this._model = new ReelModel()
    this._controller = new ReelController(this, this._view, this._model, this._symbolsStorage )
  }

  public playReelAnimation(){
   return this._controller.startSpinTween()
  }

  public set id(value: number){
    this._controller.id = value
  }

  public async stopReelAnimation(newSymbolTextureIndexes: number[]){
    await this._controller.startStopSpinTween(newSymbolTextureIndexes)
  }

  public reset(){
    this._controller.resetReel()
  }

  public handlePlaySymbolAnimation(symbolIndex: number){
    this._controller.handlePlaySymbolAnimation(symbolIndex)
  }

  public resetSymbolsALpha(){
    this._controller.resetSymbolsALpha()
  }

  public setSymbolsAlpha(value: number){
    this._controller.setSymbolsAlpha(value)
  }
  
}