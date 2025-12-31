import CreditsCounterModel from "../model/CreditsCounterModel";
import CreditsCounterView from "../view/CreditsCounterView";
import Container from "../../../components/Container";
import AudioManager from "../../../../managers/AudioManager";
import gsap from "gsap";

export default class BetLabelController {
  protected _model: CreditsCounterModel;
  protected _view: CreditsCounterView;
  protected _scene: Container;
  protected countCreditsTween: any;
  protected scaleUpTween: any;
  protected scaleDownTween: any;
  protected counterPromise: any;
  protected showCreditsPromise: any;

  constructor(scene: Container, model: CreditsCounterModel, view: CreditsCounterView) {
    this._scene = scene
    this._model = model;
    this._view = view;
    this._scene.alpha = 0

    this.counterPromise = null
    this.showCreditsPromise = null
    this.countCreditsTween = null
    this.scaleUpTween = null
    this.scaleDownTween = null
  }

  public async startCounter(credits: number){
    // if(credits == 0) return//@ts-ignorets
    this.setScale(1.3)
     await new Promise(resolve => {
      this.counterPromise = resolve
        this.setViewVisible(true)
        this._scene.alpha = 1
        this.startScaleUpViewTween()
        this.startCountCreditsTween(credits, resolve)
      AudioManager.playAudio("credits_count")
      AudioManager.playAudio("count_loop")
    })
  }

  public async showCreditCount(credits: number){
    this.setScale(0.9)
    // this.setViewVisible(true)
    this._scene.alpha = 0//@ts-ignorets
    this.updateCreditsText(credits.toFixed(2))

    await new Promise(resolve => {
      this.showCreditsPromise = resolve
     gsap.to( this._scene, {
      duration: 0.6,
      alpha: 1,
      ease: 'back.out',
      onComplete:() =>{
        this.startHideTween(resolve)
     }
    });
  })
  }

  private startHideTween(resolve){
    gsap.to(this._scene, {
      duration: 0.6,
      delay:1,
      alpha:0,
      ease: 'back.out',
      onComplete:() =>{
        // this.setViewVisible(false)
        resolve(0)
      }
    });
  }

  public hideCreditCount(){
    this.setViewVisible(false)
  }

  private startCountCreditsTween(credits: number, resolve: any){
    const startValue = { value: 0 }
    this.countCreditsTween = gsap.to(startValue, {
       value: credits,
       duration: 2,
       ease: 'power4.out',
       onUpdate: ()=>{
        const newValue = startValue.value.toFixed(2)//@ts-ignorets
        this.updateCreditsText(newValue)
       },
       onComplete:() =>{
          this.startScaleDownViewTween(resolve)
       }
     });
  }

  private startScaleUpViewTween(){
    this.setScale(0.1)
    this.scaleUpTween = gsap.to( this._scene.scale, {
        duration: 0.8,
        x:1.1,
        y:1.1,
        ease: 'back.out',
      });
  }

  private startScaleDownViewTween(resolve){
    this.setScale(1.1)
    this.scaleDownTween = gsap.to(this._scene.scale, {
        duration: 0.5,
        x: 0.1,
        y: 0.1,
        ease: 'back.in',
        onComplete:() =>{
            // this.setViewVisible(false) 
            this.setScale(0.9)
            this._scene.alpha = 1
            resolve(0)
        }
      });
  }

  private setViewVisible(value: boolean){
    this._scene.visible = value
  }
  //@ts-ignorets
  private updateCreditsText(newText: number){//@ts-ignorets
    this._view.creditsText.text = newText
  }

  private setScale(value: number){
    this._scene.scale.x = value
    this._scene.scale.y = value
  }

  public stopTweens(){
    if(this.counterPromise) this.counterPromise()
    if(this.showCreditsPromise) this.showCreditsPromise()
    if(this.countCreditsTween) this.countCreditsTween.pause()
    if(this.scaleUpTween) this.scaleUpTween.pause()
    if(this.scaleDownTween)  this.scaleDownTween.pause()
    this.countCreditsTween = null
    this.scaleUpTween = null
    this.scaleDownTween = null
  }

}
