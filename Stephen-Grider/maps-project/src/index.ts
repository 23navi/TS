/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./User";

const company = new Company();
const user = new User();
console.log(user);


let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });
}

initMap();