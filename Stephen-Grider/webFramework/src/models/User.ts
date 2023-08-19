import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

//Exported so that Sync can use it for type
export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProp> = new Sync<UserProp>(
    "http://localhost:3000/users"
  );

  // // This fetches the data from the server of a user and sets it to user
  // fetch(): void {
  //   axios
  //     .get(`http://localhost:3000/users/${this.get("id")}`)
  //     .then((response) => {
  //       this.set(response.data);
  //     });
  // }

  // save(): void {
  //   if (this.get("id")) {
  //     axios.put(`http://localhost:3000/users/${this.get("id")}`, this.user);
  //   }
  //   axios.post(`http://localhost:3000/users`, this.user);
  // }
}
