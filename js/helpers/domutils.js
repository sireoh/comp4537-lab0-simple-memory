export class DOMUtils {
    static Button = {
        createButton (btn, width, height, positionX, positionY) {
            btn.style.position = "absolute";
            btn.style.width = width;
            btn.style.height = height;

            // Place at (0,0) initially
            DOMUtils.Button.setLocation(btn, positionX, positionY);

            // Add to page
            document.body.appendChild(btn);
        },
        updateDetails (btn, label, colour) {
            btn.textContent = label;
            btn.style.backgroundColor = colour;
        },
        setLocation(btn, newX, newY) {
            btn.style.left = newX + "px";
            btn.style.top = newY + "px";
        }
    };
}