// import ISpriteConfig from "./interface/IDarkScreenlConfig";

export default class MachineModel  {
  _landscapeTexture: string
  _portraitTexture: string
  _isRestarted: boolean
  _areMatchesPlaying: boolean
  constructor() {
    // this.config = config
    this._isRestarted = true
    this._areMatchesPlaying = false
  }

  public get isRestarted(){
    return this._isRestarted 
  }

  public set isRestarted(value: boolean){
     this._isRestarted = value
  }

  public get areMatchesPlaying(){
    return this._areMatchesPlaying 
  }

  public set areMatchesPlaying(value: boolean){
     this._areMatchesPlaying = value
  }
}