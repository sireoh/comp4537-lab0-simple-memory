// .js/components/button.js

import {BUTTON_HEIGHT, BUTTON_WIDTH} from "../constants.js";
import { DOMUtils } from "../helpers/domutils.js";

class ButtonBase {
    constructor() {
        this.btn = document.createElement("button");
        this.height = BUTTON_HEIGHT;
        this.width = BUTTON_WIDTH;
        this.positionX = 0;
        this.positionY = 0;

        // Apply styles and add to DOM
        DOMUtils.Button.createButton(this.btn, this.width, this.height, this.positionX, this.positionY);
    }
};

export class ColouredButton extends ButtonBase {
    constructor(label, colour) {
        super();
        this.label = label;
        this.colour = colour;

        // Update button details
        DOMUtils.Button.updateDetails(this.btn, this.label, this.colour);
    }

    // Update location
    setLocation(newX, newY) {
        this.positionX = newX;
        this.positionY = newY;
        DOMUtils.Button.setLocation(this.btn, newX, newY);
    }
}