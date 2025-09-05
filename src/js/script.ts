// src/js/script.ts

import { ColouredButton } from "./components/button.js";
import { BUTTON_COLOURS } from "./constants.js";
import { GameUtils } from "./helpers/gameutils.js";
import { Utils } from "./helpers/utils.js";

async function play() {
  // DEBUG
  console.log("Game started.");

  const buttons: ColouredButton[] = [];
  const n: number = 4;
  const colours: string[] = GameUtils.randomizeColourArray(BUTTON_COLOURS);

  // Create n buttons
  for (let i = 0; i < n; i++) {
    buttons[i] = new ColouredButton(
      i + 1 + "",
      GameUtils.drawRandomColour(colours)
    );
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
play();
