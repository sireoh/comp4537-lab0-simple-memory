export class GameManager {
  btnAmount: number;
  validOrder: string[];
  selectedButtonOrder: string[];
  currentIndex: number = 0;

  constructor() {
    this.btnAmount = 0;
    this.validOrder = [];
    this.selectedButtonOrder = [];
  }

  setButton(colour: string): void {
    // Check if the current colour exists in the array
    const exists = this.selectedButtonOrder.includes(colour);

    if (!exists) {
      this.selectedButtonOrder[this.currentIndex] = colour;
      this.currentIndex++;

      console.log(this.selectedButtonOrder);
    } else {
      console.log(`${colour}" already was already clicked.`);
    }

    // If the array is full, check if it is valid
    if (this.currentIndex == this.btnAmount) {
      console.log("Array is full, checking if valid...");
      this.checkValid();
    }
  }

  checkValid(): boolean {
    if (
      JSON.stringify(this.validOrder) ===
      JSON.stringify(this.selectedButtonOrder)
    ) {
      alert("You Win!");
      return true;
    } else {
      alert("You Lose!");
    }
    return false;
  }
}
