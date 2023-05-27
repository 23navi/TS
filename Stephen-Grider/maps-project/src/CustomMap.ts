// This is an example of bad code practice... we are using two different methods which are practically doing the same thing... We can optimize it
/// <reference types="@types/google.maps" />

import {User} from "./User";
import { Company } from "./Company";



export interface Mappable{
  location:{
    lat:number,
    long:number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 3,
      }
    );
  }

  addUserMarker(user:User):void{

    new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:user.location.lat,
        lng:user.location.long,
      }
    })

  }

  addCompanyMarker(company:Company):void{

    new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:company.location.lat,
        lng:company.location.long,
      }
    })

  }




  addMarker(mappable: Mappable):void{

    // if(mappable instanceof User){
    //   mappable.
    // }

    new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:mappable.location.lat,
        lng:mappable.location.long,
      }
    })
  
  }

}







