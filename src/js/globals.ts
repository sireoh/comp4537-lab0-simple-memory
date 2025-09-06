import { GameManager } from "./gamemanager.js";
import { PlayManager } from "./playmanager.js";

export class Globals {
  static GameManager: GameManager = new GameManager();
  static PlayManager: PlayManager = new PlayManager();

  static reset() {
    this.GameManager.reset();
    this.PlayManager.reset();
  }
}
