export class EventBus {
  // TODO: set baseApp type
  baseApp: any;
  baseAppURL: string | undefined;
  constructor() {
    window.addEventListener("message", this.receiveMessage);
  }

  // TODO: set event  type
  receiveMessage = (event: any) => {
    if (event.origin === window.location.origin) return;
    this.baseApp = event.source;
    this.baseAppURL = event.origin;
  };

  sendMessage = (message: object) => {
    if (this.baseApp) {
      this.baseApp.postMessage(message, this.baseAppURL);
    }
  };
}
