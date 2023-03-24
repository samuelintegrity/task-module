export class EventBus {
  // TODO: set baseApp type
  baseApp: any;
  baseAppURL: string | undefined;
  constructor() {
    console.log("script: Task module listening for events...")
    window.addEventListener("message", this.receiveMessage);
  }

  // TODO: set event  type
  receiveMessage = (event: any) => {
    console.log("script: Task module message receive, ", event.origin, event.source)
    if (event.origin === window.location.origin) return;
    this.baseApp = event.source;
    this.baseAppURL = event.origin;
  };

  sendMessage = (message: object) => {
    console.log("script: Task module send message: ", message)
    if (this.baseApp) {
      this.baseApp.postMessage(message, this.baseAppURL);
    }
  };
}
