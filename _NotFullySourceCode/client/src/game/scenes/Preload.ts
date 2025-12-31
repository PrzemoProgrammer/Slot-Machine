import {Assets} from "pixi.js";
import AudioManager from "../../managers/AudioManager";
import ImageManager from "../../managers/ImageManager";
import BaseScene from "../abstraction/BaseScene";
import symbolTypes from "../../game/machine/config/symbolTypes";
import loadAudioData from "../../../public/assets/audio/loadAudioData.json";
import {ASSETS_CONFIG} from "../../config/assetsConfig";
import PagesManager from '../../pages/manager/PagesManager.js'; 

class Preload extends BaseScene {
  constructor() {
    super("Preload");
  }

   override async init(){
    await this.loadAllAudio()
    await this.loadResponsiveImages()
    await this.loadSymbolsAtlases()
    await this.loadMatchFrames()
    await this.loadBackgroundFrames()
    await this.loadMatchLineImages()
    await this.loadFonts()
    // await this.loadSpineAnimation()
    this.handleStartNextScene();
  }

  private async loadAllAudio() {
    await Object.entries(loadAudioData).forEach(async ([_key, audioData]) => {
     await this.loadAudio(audioData);
    });
  }  

  // private async loadSpineAnimation(){
  //   const key = "eagle"
  //   let source = await Assets.load(
  //     `assets/images/${key}.json`
  //   );
  //   ImageManager.addImage(key, source);
  // }


private async loadAudio({path, key, settings}: {path: string, key: string, settings:{ loop: boolean, volume: number}}) {
  const {_path, extension} = ASSETS_CONFIG.audio
   let source = _path + path + "/" + key + extension
   await AudioManager.addAudio(key, source, settings);
 }

 private async loadFonts(){
 await Assets.load(
    `https://pixijs.com/assets/bitmap-font/desyrel.xml`
  );
 }

private async loadResponsiveImages(){
  const images = [
    "symbols_bg",
    "credits_counter_shine",
    "symbol_describe_label",
    "game_name_logo_landscape",
    "game_name_logo_portrait",
    "dark_screen",
    "feather",
    "credits_counter_background",
  ];
  let totalImages = images.length;
  for (let i = 0; i < totalImages; i++) {
    let image = images[i];
    let source = await Assets.load(
      `assets/images/${image}.png`
    );
    ImageManager.addImage(image, source);
  }
}

private async loadSymbolsAtlases() {
  const symbolAtlasName = symbolTypes
  let totalImages = symbolAtlasName.length;
  for (let i = 0; i < totalImages; i++) {
    let key = symbolAtlasName[i];
    let source = await Assets.load(
      `assets/images/game/symbols/${key}.json`
    );
    ImageManager.addImage(key, source);
  }
}

private async loadMatchFrames() {
  const symbolAtlas = [
    "fire_frame", //0
  ];
  let totalImages = symbolAtlas.length;
  for (let i = 0; i < totalImages; i++) {
    let key = symbolAtlas[i];
    let source = await Assets.load(
      `assets/images/game/matching/frames/${key}.json`
    );
    ImageManager.addImage(key, source);
  }
}

private async loadBackgroundFrames(){
  const images = ["background", "background_overlay"]
  let totalImages = images.length;
  for (let i = 0; i < totalImages; i++) {
    let key = images[i];
    let source = await Assets.load(
      `assets/images/game/background/${key}.json`
    );
    ImageManager.addImage(key, source);
  }
}

private async loadMatchLineImages(){
  const key = "matchLinesAtlas"
  let source = await Assets.load(
    `assets/images/game/matching/lines/${key}.json`
  );
  ImageManager.addImage(key, source);
}

private handleStartNextScene(){
  PagesManager.handleLoginPageVisible(true)
}

}

export default new Preload()