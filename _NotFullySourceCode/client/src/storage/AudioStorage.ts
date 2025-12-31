import { Howl} from "howler";

export default class AudioStorage {
    private static audio: Map<string, Howl> = new Map();
  
    public static addAudio(key:string, source: Howl) {
      this.audio.set(key, source);
    }
  
    public static getAudio(key: string): Howl | undefined {
      return this.audio.get(key);
    }
  }
