// .ts/components/button.ts

import { BUTTON_HEIGHT, BUTTON_WIDTH } from "../constants.js";
import { DOMUtils } from "../helpers/domutils.js";

class ButtonBase {
  btn: HTMLButtonElement;
  height: string;
  width: string;
  positionX: number;
  positionY: number;

  constructor() {
    this.btn = document.createElement("button");
    this.height = BUTTON_HEIGHT;
    this.width = BUTTON_WIDTH;
    this.positionX = 0;
    this.positionY = 0;

    // Apply styles and add to DOM
    DOMUtils.Button.createButton(
      this.btn,
      this.width,
      this.height,
      this.positionX,
      this.positionY
    );
  }
}

export class ColouredButton extends ButtonBase {
  label: string;
  colour: string;

  constructor(label: string, colour: string) {
    super();
    this.label = label;
    this.colour = colour;

    // Update button details
    DOMUtils.Button.updateDetails(this.btn, this.label, this.colour);
  }

  // Update location
  setLocation(newX: number, newY: number): void {
    this.positionX = newX;
    this.positionY = newY;
    DOMUtils.Button.setLocation(this.btn, newX, newY);
  }
}
