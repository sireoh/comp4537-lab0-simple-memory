export class Constants {
  static BUTTON_HEIGHT: string = "5em";
  static BUTTON_WIDTH: string = "10em";

  // Offsets
  static STARTING_X_POSITION: number = 0;
  static VERTICAL_START: number = 75;
  static HORIZONTAL_START: number = 10;

  // Buttons
  static MAX_BUTTONS: number = 7;

  // Colours
  static RGB_COLOURS_AMT: number = 256;
  static BUTTON_COLOURS: string[] = Constants.generateRandomColours(
    Constants.MAX_BUTTONS
  );

  static generateRandomColours(MAX_BUTTONS: number) {
    let colours = [];
    for (let i = 0; i < MAX_BUTTONS; i++) {
      let r = Math.floor(Math.random() * Constants.RGB_COLOURS_AMT);
      let g = Math.floor(Math.random() * Constants.RGB_COLOURS_AMT);
      let b = Math.floor(Math.random() * Constants.RGB_COLOURS_AMT);
      colours.push(`rgb(${r}, ${g}, ${b})`);
    }
    return colours;
  }
}
