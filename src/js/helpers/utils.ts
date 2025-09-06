export class Utils {
  static getBrowserSize() {
    let getBrowserSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    return getBrowserSize;
  }
}

export class UtilManager {
  timeouts: number[];

  constructor() {
    this.timeouts = [];
  }

  clearAllTimeouts(): void {
    this.timeouts.forEach((id) => clearTimeout(id));
    this.timeouts = [];
  }
}
