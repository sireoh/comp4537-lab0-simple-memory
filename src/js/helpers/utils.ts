export class Utils {
  static getBrowserSize() {
    let getBrowserSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    return getBrowserSize;
  }
  static storeMessage(message: string) {
    console.log(`Storing message: ${message}`);
  }
  static sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
