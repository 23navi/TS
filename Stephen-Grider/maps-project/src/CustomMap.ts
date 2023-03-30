export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
      this.googleMap = new google.maps.Map(
        document.getElementById(divId) as HTMLElement,
        {
          center: { lat: 0, lng: 0 }, // This location is where the map will center about .....
          zoom: 3,
        }
      );
    }
  }
  