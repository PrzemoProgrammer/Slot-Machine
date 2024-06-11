export default class SymbolModel  {
 private  _id :number
 private _height:number
 private _width:number
 private _isBlocked: boolean
  constructor(id: number) {
    this._id = id
    this._height = 0
    this._width = 0
    this._isBlocked = false
  }

  public setSize(w: number, h:number){
    this._width = w
    this._height = h
  }

  public get id() {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get width(){
    return this._width
  }

  public get height(){
    return  this._height
  }

  public get isBlocked(){
    return this._isBlocked
  }

  public set isBlocked(value: boolean){
     this._isBlocked = value
  }
}