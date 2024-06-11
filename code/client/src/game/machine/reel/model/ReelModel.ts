import gsap from "gsap";
import { REEL_SYMBOLS_CONFIG, REEL_SPIN_TWEEN_CONFIG } from "../../config/machineConfig";

export default class ReelModel {
  private _id: number;
  private _topSymbolY: number;
  private _spinTween: GSAPTween;
  private _symbolMoveSpeed: number;
  private _stopSpinTween: GSAPTween;
  private _symbolMoveDownLimitY: number;
  private _isSpinTweenDuringStop: boolean;
  private _stopSpinTweenPromise: Promise<void> 
  private _serverSymbolTextureIndexes: number[];

  constructor() {
    this._id = 0;
    this._isSpinTweenDuringStop = false;
    this._symbolMoveDownLimitY = REEL_SPIN_TWEEN_CONFIG.symbolMoveDownLimitY
    this._symbolMoveSpeed = REEL_SPIN_TWEEN_CONFIG.symbolMoveSpeed
    this._serverSymbolTextureIndexes = [];
    this._topSymbolY = REEL_SYMBOLS_CONFIG.positionsY[0];
    this._stopSpinTweenPromise = new Promise(()=>{})
    this._spinTween = gsap.to({}, {});
    this._stopSpinTween = gsap.to({}, {});
  }

  public get id() {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get spinTween() {
    return this._spinTween;
  }

  public set spinTween(tween: GSAPTween) {
    this._spinTween = tween;
  }

  public get stopSpinTween() {
    return this._stopSpinTween;
  }

  public set stopSpinTween(tween: GSAPTween) {
    this._stopSpinTween = tween;
  }

  public get isSpinTweenDuringStop() {
    return this._isSpinTweenDuringStop;
  }

  public set isSpinTweenDuringStop(value: boolean) {
    this._isSpinTweenDuringStop = value;
  }

  public get serverSymbolTextureIndexes() {
    return this._serverSymbolTextureIndexes;
  }

  public set serverSymbolTextureIndexes(array: number[]) {
    this._serverSymbolTextureIndexes = array;
  }

  public get topSymbolY() {
    return this._topSymbolY;
  }

  public get symbolMoveDownLimitY(){
    return this._symbolMoveDownLimitY
  }

  public get symbolMoveSpeed(){
    return this._symbolMoveSpeed
  }

  public get stopSpinTweenPromise(){
    return this._stopSpinTweenPromise
  }

  public set stopSpinTweenPromise(newPromise: Promise<void> ){
    this._stopSpinTweenPromise = newPromise
  }
}
