import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable {
    companyName:string;
    catchPhrase:string;
    location: {
        lat: number;
        long: number;
    }
    constructor(){
        this.companyName=faker.company.name();
        this.catchPhrase=faker.company.catchPhrase();
        this.location = {
            lat: +faker.address.latitude(),
            long: +faker.address.longitude(),
          };
    } 
}
