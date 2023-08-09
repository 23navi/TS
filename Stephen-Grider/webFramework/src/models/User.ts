interface UserProp {
  name?: string;
  age?: number;
}

type EventCallback = () => void;

export class User {
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
}
