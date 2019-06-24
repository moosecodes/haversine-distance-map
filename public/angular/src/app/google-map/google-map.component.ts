import { Component, OnInit } from '@angular/core';
import { MarkerManager } from '@agm/core';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  constructor(private markerManager: MarkerManager) {}
  title = 'Peakers Geocoding Challenge';
  zoom = 12;
  center = {
    lat: 34.020465,
    lng: -118.4928982,
  };
  markers: marker[] = [
    {
      lat: 34.0704802,
      lng: -118.2988647,
      label: 'M',
      draggable: false,
    },
    {
      lat: 34.020465,
      lng: -118.4928982,
      label: 'P',
      draggable: false,
    },
  ];
  distance = '100';

  mapClicked(event) {
    console.log(event);
    // this.markers.push({
    //   lat: event.coords.lat,
    //   lng: event.coords.lng,
    //   label: new Date().toString(),
    //   draggable: true,
    // });
  }

  ngOnInit() {
    console.log('Map Initialized.', this.markers);
  }
}
