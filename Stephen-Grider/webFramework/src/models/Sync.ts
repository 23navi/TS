import axios from "axios";
import { UserProp } from "./User";

class Sync {
  // This fetches the data from the server of a user and sets it to user
  fetch(id: number, data: UserProp): void {
    //     axios.get(`http://localhost:3000/users/${id}`).then((response) => {
    //       this.set(response.data);
    //     });

    axios.get(`http://localhost:3000/users/${id}`).then((response) => {
      return new Promise((resolve, reject) => {
        if (response.data) resolve(response.data);
        reject("j");
      });
    });
  }

  save(data: UserProp): void {
    const { id } = data;
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, data);
    }
    axios.post(`http://localhost:3000/users`, data);
  }
}
