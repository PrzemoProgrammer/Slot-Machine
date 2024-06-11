import DescribeLabelModel from "./model/DescribeLabelModel";
import DescribeLabelView from "./view/DescribeLabelView";
import DescribeLabelController from "./controller/DescribeLabelController";
import Container from "../../components/Container";

export default class DescribeLabel extends Container {
  protected _model: DescribeLabelModel;
  protected _view: DescribeLabelView;
  protected _controller: DescribeLabelController;

  constructor() {
    super();
    this._view = new DescribeLabelView(this);
    this._model = new DescribeLabelModel();
    this._controller = new DescribeLabelController(this, this._model, this._view);
  }

  public set spriteTexture(textureKey: string){
    this._controller.spriteTexture = textureKey
  }

  public set setVisible(value: boolean){
    this._controller.setVisible = value
  }

  public playSymbolAnimation(){
    this._controller.playSpriteAnimationOnce()
  }

  public show(symbolAtlasKey: string){
    this._controller.showLabel(symbolAtlasKey)
  }

  public hide(){
    this._controller.hideLabel()
  }
  public setRightSide(){
    this._controller.setRightSide()
  }

}
