import axios from "axios";

interface UserProp {
  id?: number;
  name?: string;
  age?: number;
}

type EventCallback = () => void;

export class User {
  // To store the different callbacks attached to a event for an User object as array...
  events: { [keys: string]: EventCallback[] } = {};

  constructor(private user: UserProp) {}

  // is we did user.get("id"), we will get this user's id
  get(propName: string): string | number {
    return this.user[propName as keyof UserProp]!;
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

  // This fetches the data from the server of a user and sets it to user
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response) => {
        this.set(response.data);
      });
  }

  save(): void {
    if (this.get("id")) {
      axios.put(`http://localhost:3000/users/${this.get("id")}`, this.user);
    }
    axios.post(`http://localhost:3000/users`, this.user);
  }
}
