import { ColouredButton } from "../components/button.js";
import { Constants } from "../constants.js";
import { Utils } from "./utils.js";

export class GameUtils {
  static async scrambleButtons(
    buttons: ColouredButton[],
    timesToScramble: number
  ) {
    for (let i = 0; i < timesToScramble; i++) {
      // Scramble each button
      buttons.forEach((button) => {
        GameUtils.scrambleButtonsHelper(button);
      });

      // Sleep
      console.log(`[${i + 1}] Sleeping for 2 seconds...`);
      await Utils.sleep(2000);
    }
  }
  static organizeButtons(buttons: ColouredButton[]) {
    for (let i = 0; i < buttons.length; i++) {
      GameUtils.organizeButtonsHelper(buttons, i);
    }
  }

  /**
   * This function organizes buttons into rows based on the browser width.
   * @param buttons The array of buttons to organize.
   * @param index The index of the button to organize.
   */
  static organizeButtonsHelper(buttons: ColouredButton[], index: number) {
    // Get important dimensions to be used for calculations
    const browserWidth = Utils.getBrowserSize().width;
    const buttonWidth = ColouredButton.emToPixels(Constants.BUTTON_WIDTH);
    const buttonHeight = ColouredButton.emToPixels(Constants.BUTTON_HEIGHT);

    // Determines the amound ot rows based on the browser width
    const buttonsPerRow = Math.floor(
      (browserWidth - Constants.HORIZONTAL_START) / buttonWidth
    );

    let row = Math.floor(index / buttonsPerRow);
    let col = index % buttonsPerRow;

    let x = Constants.HORIZONTAL_START + col * buttonWidth;
    let y = Constants.VERTICAL_START + row * buttonHeight;

    buttons[index]!.setLocation(x, y);
  }

  static scrambleButtonsHelper(button: ColouredButton) {
    // Browser dimensions
    const { width: browserWidth, height: browserHeight } =
      Utils.getBrowserSize();

    // Button dimensions (converted from em to px)
    const buttonWidth = ColouredButton.emToPixels(Constants.BUTTON_WIDTH);
    const buttonHeight = ColouredButton.emToPixels(Constants.BUTTON_HEIGHT);

    // Random positions, ensuring the button stays inside the screen
    const x = Math.floor(Math.random() * (browserWidth - buttonWidth));
    const y = Math.floor(Math.random() * (browserHeight - buttonHeight));

    button.setLocation(x, y);
  }

  static hideButtonLabels(buttons: ColouredButton[]) {
    buttons.forEach((button) => {
      button.btn.textContent = "";
    });
  }

  static getRandomColour(): string {
    let r = Math.floor(Math.random() * Constants.RGB_COLOURS_AMT);
    let g = Math.floor(Math.random() * Constants.RGB_COLOURS_AMT);
    let b = Math.floor(Math.random() * Constants.RGB_COLOURS_AMT);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
