class GameUtils {
  static generateButtons(count: number) {
    console.log(`Generating ${count} buttons.`);
    // TODO: clone the array of colors and then push / pop to select the colors.
  }
  static scrambleButtons() {
    console.log("Scrambling buttons.");
  }
  static hideButtonLabels() {
    console.log("Hiding button labels.");
  }
  static showButtonLabel(index: number) {
    console.log(`Showing label for button at index ${index}.`);
  }
  static checkButtonOrder(
    selectedButtonLabel: string,
    selectedButtonIndex: number
  ) {
    console.log(
      `Checking button order for label ${selectedButtonLabel} at index ${selectedButtonIndex}.`
    );
  }
  static resetGame() {
    console.log("Resetting game.");
  }
}
