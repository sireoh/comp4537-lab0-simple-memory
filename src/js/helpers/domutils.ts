import { Globals } from "../globals.js";

export class DOMUtils {
  static Button = {
    createButton(
      btn: HTMLButtonElement,
      positionX: number,
      positionY: number
    ): void {
      // Place at initial location
      DOMUtils.Button.setLocation(btn, positionX, positionY);

      // Attack .buttonBase class to each button
      btn.className = "buttonBase";

      // Disables the button to be clickable on creation
      btn.disabled = true;

      // Add to page
      document.body.appendChild(btn);
    },

    updateDetails(btn: HTMLButtonElement, label: string, colour: string): void {
      btn.textContent = label;
      btn.style.backgroundColor = colour;
      btn.onclick = () => {
        Globals.GameManager.setButton(colour);
      };
    },

    setLocation(btn: HTMLButtonElement, newX: number, newY: number): void {
      btn.style.left = `${newX}px`;
      btn.style.top = `${newY}px`;
    },
  };
}
