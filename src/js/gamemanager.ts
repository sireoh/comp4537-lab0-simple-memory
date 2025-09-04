import { Utils } from "../js/helpers/utils";

class GameManager {
  viewBounds: { width: number; height: number };
  btnAmount: number;
  selectedButtonOrder: number[];
  selectedButtonIndex: number;

  constructor() {
    this.viewBounds = Utils.getBrowserSize();
    this.btnAmount = 0;
    this.selectedButtonOrder = [];
    this.selectedButtonIndex = 0;
  }
}
