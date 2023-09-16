import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  } = {
    lat: 34,
    long: 34,
  };

  constructor() {
    this.name = faker.name.firstName();

    //faker.address.latitude and longitude returns string value... to convert it to number we user + shorthand.
    this.location = {
      lat: +faker.address.latitude(),
      long: +faker.address.longitude(),
    };
  }
}

export { User };
