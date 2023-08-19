import axios from "axios";

import { Eventing } from "./Eventing";

//Exported so that Sync can use it for type
export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private user: UserProp) {}

  // is we did user.get("id"), we will get this user's id
  get(propName: string): string | number {
    return this.user[propName as keyof UserProp]!;
  }

  set(update: UserProp): void {
    Object.assign(this.user, update);
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
