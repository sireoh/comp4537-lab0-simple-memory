import type { ColouredButton } from "./components/button";

export class GameManager {
  btnAmount: number;
  validOrder: ColouredButton[];
  selectedButtonOrder: string[];
  currentIndex: number = 0;

  constructor() {
    this.btnAmount = 0;
    this.validOrder = [];
    this.selectedButtonOrder = [];
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
    } else {
      alert("Incorrect!");
    }
  }
}
