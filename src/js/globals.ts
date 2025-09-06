import { GameManager } from "./gamemanager.js";
import { UtilManager } from "./helpers/utils.js";
import { PlayManager } from "./playmanager.js";

/**
 * Globals class contains all the global variables and methods used throughout the application.
 * This class is responsible for managing the game state, UI elements, and other global variables,
 * resetting the game state, and clearing all the timers and memory.
 */
export class Globals {
  static GameManager: GameManager = new GameManager();
  static PlayManager: PlayManager = new PlayManager();
  static UtilManager: UtilManager = new UtilManager();

  /**
   * Resets all the managers
   */
  static reset() {
    // Clears all the timers
    this.UtilManager.clearAllTimeouts();

    // Clears the memory
    this.GameManager.reset();

    // Clears the frontend DOM elements
    this.PlayManager.reset();
  }
}
