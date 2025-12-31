import SymbolModel from "./model/SymbolModel";
import SymbolView from "./view/SymbolView";
import SymbolController from "./controller/SymbolController";
import Container from "../../../components/Container";
import ISymbolConfig from "./interface/ISymbolConfig";

export default class Symbol extends Container {
  protected _model: SymbolModel;
  protected _view: SymbolView;
  protected _controller: SymbolController;

  constructor(config: ISymbolConfig) {
    super();
    this.y = config.y;
    this._view = new SymbolView(config.view, this);
    this._model = new SymbolModel(config.id);
    this._controller = new SymbolController(this, this._model, this._view);
  }

  public set texture(textureKey: string){
    this._controller.spriteTexture = textureKey
  }

  public get texture(){
    return this._controller.spriteTexture
  }

  public playAnimation(){
    this._controller.playSpriteAnimationOnce()
  }

  public setAlpha(value: number){
    this._controller.setTextureAlpha(value)
  }

}
