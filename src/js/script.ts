// src/js/script.ts

import { ColouredButton } from "./components/button.js";
import { GameUtils } from "./helpers/gameutils.js";
import { Globals } from "./globals.js";
import { Constants } from "./constants.js";

/**
 * Play function starts the main game loop
 * @param n as the numbers of buttons to generate
 */
async function play(n: number) {
  // Reset the game
  Globals.reset();

  // Set the max button amount for the game manager
  Globals.GameManager.setBtnAmount(n);

  // Create n buttons
  createNButtons(n);

  // Organizes buttons based on the browser width.
  GameUtils.organizeButtons(Globals.PlayManager.buttons);

  // Schedule scramble after n seconds
  Globals.UtilManager.timeouts.push(
    setTimeout(() => {
      // Scrambles the buttons, this function has a timer inside, so it'll block until finished.
      GameUtils.scrambleButtons(Globals.PlayManager.buttons, n);

      // Schedule hiding labels 2s later
      Globals.UtilManager.timeouts.push(
        setTimeout(() => {
          GameUtils.hideButtonLabels(Globals.PlayManager.buttons);
          Globals.PlayManager.buttons.forEach(
            (button) => (button.btn.disabled = false)
          );
        }, Constants.TWO_SECONDS)
      );
      // Scramble buttons - outer loop: Waits n * 1s in the organized state.
    }, n * Constants.SECOND)
  );
}

/**
 * Creates buttons to the DOM, depending of the number n.
 * @param n number of buttons to create
 */
function createNButtons(n: number) {
  for (let i = 0; i < n; i++) {
    let chosenColour = GameUtils.getRandomColour();
    Globals.PlayManager.buttons[i] = new ColouredButton(
      i + 1 + "",
      chosenColour
    );

    Globals.GameManager.validOrder.push(Globals.PlayManager.buttons[i]!);
  }
}

// Get "n" from the form
const form = document.getElementById("mainForm") as HTMLFormElement;
// Create event listener for the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const n: number = form["buttonCount"].value;
  // Start a new game
  play(n);
});
