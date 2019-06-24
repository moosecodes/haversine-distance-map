import { Component, OnInit } from '@angular/core';
import { DistanceFinderService } from '../services/distance-finder.service';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  balloon: string;
  draggable: boolean;
  streetAddr: string;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  constructor(private _distanceFinder: DistanceFinderService) {}
  title = 'Peakers Geocoding Challenge';
  distance;
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
      balloon: 'Moose lives in Koreatown but is able to relocate.',
      draggable: true,
      streetAddr: '222 S Mariposa Ave, Los Angeles, CA',
    },
    {
      lat: 34.020465,
      lng: -118.4928982,
      label: 'P',
      balloon: 'Peakers.ai is located in Santa Monica.',
      draggable: true,
      streetAddr: '730 Arizona Ave, Santa Monica, CA',
    },
  ];

  ngOnInit() {
    this.findDistance();
  }
  findDistance() {
    let coords = {
      start: this.markers[0].lat + ', ' + this.markers[0].lng,
      end: this.markers[1].lat + ', ' + this.markers[1].lng,
    };
    this._distanceFinder
      .getDistance(coords)
      .subscribe(
        data => (this.distance = data),
        error => (this.distance = error)
      );
  }
}
