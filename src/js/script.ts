// src/js/script.ts

import { ColouredButton } from "./components/button.js";
import { BUTTON_COLOURS } from "./constants.js";
import { GameUtils } from "./helpers/gameutils.js";
import { Utils } from "./helpers/utils.js";
import { GlobalGameManager } from "./globals.js";

async function play(n: number) {
  // DEBUG
  console.log("Game started.");

  const buttons: ColouredButton[] = [];
  const colours: string[] = GameUtils.randomizeColourArray(BUTTON_COLOURS);

  // Set the max button amount for the game manager
  InitGameManager.btnAmount = n;

  // Create n buttons
  for (let i = 0; i < n; i++) {
    let chosenColour = GameUtils.drawRandomColour(colours);
    buttons[i] = new ColouredButton(i + 1 + "", chosenColour);

    InitGameManager.validOrder.push(chosenColour);
    // DEBUG
    console.log(`Valid order updated: ${GlobalGameManager.validOrder}`);
  }

  GameUtils.organizeButtons(buttons);

  // Sleep
  await Utils.sleep(n * 1000);

  GameUtils.scrambleButtons(buttons);

  // Sleep
  await Utils.sleep(2000);

  // Hide button labels
  GameUtils.hideButtonLabels(buttons);
}

// Get "n" from the form
const form = document.getElementById("mainForm") as HTMLFormElement;
const n: number = form["buttonCount"].value;

// Create event listener for the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Start a new game
  play(n);
});
