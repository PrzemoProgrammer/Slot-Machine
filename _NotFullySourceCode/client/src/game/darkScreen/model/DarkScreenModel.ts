import ISpriteConfig from "./interface/IDarkScreenlConfig";

export default class DarkScreenModel  {
  _landscapeTexture: string
  _portraitTexture: string
  config: ISpriteConfig
  constructor(config: ISpriteConfig) {
    this.config = config
    this._landscapeTexture =   this.config.textureTypes.landscape
    this._portraitTexture =   this.config.textureTypes.portrait
  }

  public get landscapeTexture(){
    return this._landscapeTexture 
  }

  public get portraitTexture(){
    return this._portraitTexture 
  }
}