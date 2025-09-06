import { GameManager } from "./gamemanager.js";
import { UtilManager } from "./helpers/utils.js";
import { PlayManager } from "./playmanager.js";

export class Globals {
  static GameManager: GameManager = new GameManager();
  static PlayManager: PlayManager = new PlayManager();
  static UtilManager: UtilManager = new UtilManager();

  static reset() {
    this.GameManager.reset();
    this.PlayManager.reset();
  }
}
