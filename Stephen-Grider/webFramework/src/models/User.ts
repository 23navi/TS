interface UserProp {
  name?: string;
  age?: number;
}

type EventCallback = () => void;

export class User {
  // To store the different callbacks attached to a event for an User object as array...
  events: { [keys: string]: EventCallback[] } = {};

  constructor(private user: UserProp) {}

  get(propName: string): string | number {
    return this.user[propName];
  }

  set(update: UserProp): void {
    Object.assign(this.user, update);
  }

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
