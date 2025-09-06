import type { ColouredButton } from "./components/button.js";
import { Globals } from "./globals.js";

export class GameManager {
  btnAmount: number;
  validOrder: ColouredButton[];
  selectedButtonOrder: string[];
  currentIndex: number;

  constructor() {
    this.btnAmount = 0;
    this.validOrder = [];
    this.selectedButtonOrder = [];
    this.currentIndex = 0;
  }

  setButton(colour: string): void {
    this.selectedButtonOrder[this.currentIndex] = colour;

    // Checks if the button is valid.
    this.checkValid();

    // Goes to next index
    if (this.currentIndex < this.btnAmount) {
      this.currentIndex++;
    }
  }

  checkValid(): void {
    if (
      this.validOrder[this.currentIndex]!.colour ==
      this.selectedButtonOrder[this.currentIndex]
    ) {
      this.validOrder[this.currentIndex]!.btn.textContent =
        this.currentIndex + 1 + "";

      // End the game if everything is correct
      if (this.currentIndex == this.btnAmount - 1) {
        alert("Excellent memory!");
      }
    } else {
      this.endGame();
    }
  }

  reset() {
    // Clear all buttons from the DOM
    this.removeButtonsFromDOM();

    // Clear the memory
    this.btnAmount = 0;
    this.validOrder = [];
    this.selectedButtonOrder = [];
    this.currentIndex = 0;
  }

  removeButtonsFromDOM() {
    this.validOrder.forEach((item) => {
      item.btn.remove();
    });
  }

  endGame() {
    this.reset();
    Globals.PlayManager.reset();
    alert("Game over!");
  }
}
