import { Component, OnInit, NgModule } from '@angular/core';
import { DistanceFinderService } from '../services/distance-finder.service';
import { GeoencodeService } from '../services/geoencode.service';

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
  constructor(
    private _distanceFinder: DistanceFinderService,
    private _encoder: GeoencodeService
  ) {}

  title = 'Peakers.ai Geocoding Challenge';
  distance;
  zoom = 12;
  markers: marker[] = [
    {
      lat: 0,
      lng: 0,
      label: 'M',
      balloon: 'Moose lives in Koreatown and is willing to relocate.',
      draggable: true,
      streetAddr: '222 S Mariposa Ave, Los Angeles, CA',
    },
    {
      lat: 0,
      lng: 0,
      label: 'P',
      balloon: 'Peakers.ai is located in Santa Monica.',
      draggable: true,
      streetAddr: '730 Arizona Ave, Santa Monica, CA',
    },
  ];

  center = {
    lat: this.markers[1].lat,
    lng: this.markers[1].lng,
  };

  ngOnInit() {
    this._encoder
      .geoEncode(this.markers[0].streetAddr)
      .subscribe(
        data => (
          (this.markers[0].lat = data.coords.lat),
          (this.markers[0].lng = data.coords.lng)
        ),
        error => (this.markers[0] = error)
      );
    this._encoder
      .geoEncode(this.markers[1].streetAddr)
      .subscribe(
        data => (
          (this.markers[1].lat = data.coords.lat),
          (this.markers[1].lng = data.coords.lng)
        ),
        error => (this.markers[1] = error)
      );

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
