// src/js/script.ts

import { ColouredButton } from "./components/button.js";
import { GameUtils } from "./helpers/gameutils.js";
import { Globals } from "./globals.js";

async function play(n: number) {
  // Reset previous timers
  Globals.UtilManager.clearAllTimeouts();

  // Reset the game
  Globals.reset();

  // Set the max button amount for the game manager
  Globals.GameManager.btnAmount = n;

  // Create n buttons
  for (let i = 0; i < n; i++) {
    let chosenColour = GameUtils.getRandomColour();
    Globals.PlayManager.buttons[i] = new ColouredButton(
      i + 1 + "",
      chosenColour
    );

    Globals.GameManager.validOrder.push(Globals.PlayManager.buttons[i]!);
  }

  GameUtils.organizeButtons(Globals.PlayManager.buttons);

  // Schedule scramble after n seconds
  Globals.UtilManager.timeouts.push(
    setTimeout(() => {
      GameUtils.scrambleButtons(Globals.PlayManager.buttons, n);

      // Schedule hiding labels 2s later
      Globals.UtilManager.timeouts.push(
        setTimeout(() => {
          GameUtils.hideButtonLabels(Globals.PlayManager.buttons);
          Globals.PlayManager.buttons.forEach(
            (button) => (button.btn.disabled = false)
          );
        }, 2000)
      );
    }, n * 1000)
  );
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
