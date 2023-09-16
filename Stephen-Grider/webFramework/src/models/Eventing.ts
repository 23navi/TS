type EventCallback = () => void;
export class Eventing {
  // To store the different callbacks attached to a event for an User object as array...
  events: { [keys: string]: EventCallback[] } = {};

  on(eventName: string, callback: EventCallback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}
