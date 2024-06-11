import SymbolModel from "../model/SymbolModel";
import Container from "../../../../../components/Container";
import SymbolView from "../view/SymbolView";
import GameSignals from "../../../../../gameSignals/GameSignals";//@ts-ignorets
import * as PIXI from "pixi.js";

export default class SymbolController  {
    protected _scene: Container;
   protected _model: SymbolModel
   protected _view: SymbolView
    constructor( scene: Container, model: SymbolModel, view: SymbolView) {
        this._scene = scene
        this._model = model
        this._view = view
        this.handleEvents()
    }

    public set spriteTexture(textureKey: string){
        this._view.sprite.changeTexture(textureKey)//@ts-ignorets
        this._view.sprite.atlasKey = textureKey
    }

    public setBlockSpriteInteractive(value: boolean){
        this._model.isBlocked = value
    }

    public  playSpriteAnimationOnce(){
        this._view.sprite.playAnimationOnce()
    }

    public handleEvents() {
        this._view.sprite.on("pointerdown", () => {
            const data = {
                globalPosition: this.globalPosition,
                symbolAtlasKey: this.spriteAtlasKey,
                atlasKey: this.spriteAtlasKey
            }
            GameSignals.onShowSymbolDescribeLabel.dispatch(data) 
        });
      }

    public get spriteTexture(){//@ts-ignorets
        return  this._view.sprite.texture
    }

    public get spriteAtlasKey(){//@ts-ignorets
        return this._view.sprite.atlasKey
    }

    public setTextureAlpha(value: number){
        this._view.sprite.alpha = value
    }

    private get globalPosition(){
        return  this._view.sprite.toGlobal(new PIXI.Point(0, 0));
    }
}

