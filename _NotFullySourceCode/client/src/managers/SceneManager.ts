import AppManager from "../managers/AppManager";
import SceneStorage from "../storage/SceneStorage";
import BaseScene from "../game/abstraction/BaseScene";

export default class SceneManager {
  
    public static addScene(scene: BaseScene[]):void  {
      scene.forEach((scene) => {
        SceneStorage.addScene(scene)
        AppManager.addChild(scene)
      });
    }

    public static autoStartFirstScene(): void {
      const scenesMap = SceneStorage.scenes
      const scenesKeys = Array.from(scenesMap.keys());
      const firstScene = scenesKeys.length > 0 ? scenesKeys[0] : undefined;
      if(firstScene)
      this.startScene(firstScene);
    }
  
    public static startScene(key: string, data?: any):void {
      const scene = SceneStorage.getScene(key)
      scene?.init(data)
    }
  
   public static removeScene(key: string):void  {
     const sceneInstance = this.getScene(key)
     if(sceneInstance)
     AppManager.removeChild(sceneInstance)
    }

    public static getScene(key: string){
      return SceneStorage.getScene(key)
    }

    public static deleteScene(key: string):void  {
      this.removeScene(key)
      SceneStorage.deleteScene(key)
    }

    public static setVisible(key: string, value: any) {
      const sceneInstance = this.getScene(key);
      sceneInstance.visible = value;
    }
  }
  