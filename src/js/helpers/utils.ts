export class Utils {
  static getBrowserSize() {
    let getBrowserSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    console.log(
      `Browser size: ${getBrowserSize.width} x ${getBrowserSize.height}`
    );
    return getBrowserSize;
  }
  static storeMessage(message: string) {
    console.log(`Storing message: ${message}`);
  }
}
