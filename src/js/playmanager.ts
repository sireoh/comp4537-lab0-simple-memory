import { ColouredButton } from "./components/button.js";

export class PlayManager {
  buttons: ColouredButton[] = [];
  constructor() {
    this.buttons = [];
  }

  reset() {
    this.buttons = [];
  }
}
