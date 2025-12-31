
export default class DescribeLabelModel  {
  protected _rightTextXPosition: number
  protected _leftTextXPosition: number

  constructor() {
    this._rightTextXPosition = 170
    this._leftTextXPosition = -170
  }

  public set rightTextXPosition(value: number) {
    this._rightTextXPosition = value;
  }

  public get rightTextXPosition() {
    return this._rightTextXPosition;
  }

  
  public set leftTextXPosition(value: number) {
    this._leftTextXPosition = value;
  }

  public get leftTextXPosition() {
    return this._leftTextXPosition;
  }



}