import axios, { AxiosPromise } from "axios";
import { UserProp } from "./User";

interface IHasId {
  id?: number;
}

export class Sync<T extends IHasId> {
  constructor(public baseURL: string) {}

  // This fetches the data from the server of a user and sets it to user
  fetch(id: number, data: T): AxiosPromise {
    return axios.get(`${this.baseURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.baseURL}/${id}`, data);
    }
    return axios.post(`${this.baseURL}`, data);
  }
}
