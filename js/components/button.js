class ButtonBase {
    constructor() {
        this.height = BUTTON_HEIGHT;
        this.width = BUTTON_WIDTH;
    }
};

class ColouredButton extends ButtonBase {
    constructor(label, colour, startX, startY) {
        super();
        this.label = label;
        this.colour = colour;
        this.startX = startX;
        this.startY = startY;
    }
}