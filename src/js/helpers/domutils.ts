import { InitGameManager } from "../init.js";

export class DOMUtils {
  static Button = {
    createButton(
      btn: HTMLButtonElement,
      width: number | string,
      height: number | string,
      positionX: number,
      positionY: number
    ): void {
      btn.style.position = "absolute";
      btn.style.width = typeof width === "number" ? `${width}px` : width;
      btn.style.height = typeof height === "number" ? `${height}px` : height;

      // Place at initial location
      DOMUtils.Button.setLocation(btn, positionX, positionY);

      // Add to page
      document.body.appendChild(btn);
    },

    updateDetails(btn: HTMLButtonElement, label: string, colour: string): void {
      btn.textContent = label;
      btn.style.backgroundColor = colour;
      btn.onclick = () => {
        InitGameManager.setButton(colour);
      };
    },

    setLocation(btn: HTMLButtonElement, newX: number, newY: number): void {
      btn.style.left = `${newX}px`;
      btn.style.top = `${newY}px`;
    },
  };
}
