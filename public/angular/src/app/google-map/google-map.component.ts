import { Component, OnInit, NgModule } from '@angular/core';
import { DistanceFinderService } from '../services/distance-finder.service';
import { GeoencodeService } from '../services/geoencode.service';
import { ReverseEncodeService } from '../services/reverse-encode.service';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  balloon: string;
  draggable: boolean;
  streetAddr: string;
}

interface Address {
  address: String;
}
interface Coords {
  address: Object;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  constructor(
    private _distanceFinder: DistanceFinderService,
    private _encoder: GeoencodeService,
    private _decoder: ReverseEncodeService
  ) {}

  title = 'The Marcus Buckingham Company';
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
      balloon: 'Moose lives in Koreatown and is willing to relocate.',
      draggable: false,
      streetAddr: '222 S Mariposa Ave, Los Angeles, CA',
    },
    {
      lat: this.center.lat,
      lng: this.center.lng,
      label: 'P',
      balloon: 'TMBG is located in Beverly Hills.',
      draggable: false,
      streetAddr: '8350 Wilshire Blvd, Beverly Hills, CA',
    },
  ];

  ngOnInit() {
    this.encode(this.markers[0], this.markers[1]);
  }

  encode(from, to) {
    !from ? (from = this.markers[0]) : null;
    !to ? (to = this.markers[1]) : null;
    this._encoder
      .geoEncode(from.streetAddr)
      .subscribe(
        data => (
          (from.lat = data.coords.lat),
          (from.lng = data.coords.lng),
          this.findDistance()
        ),
        error => (from = error)
      );
    this._encoder
      .geoEncode(to.streetAddr)
      .subscribe(
        data => (
          (to.lat = data.coords.lat),
          (to.lng = data.coords.lng),
          this.findDistance()
        ),
        error => (to = error)
      );
  }

  reverseEncode(from, to) {
    !from ? (from = this.markers[0]) : null;
    !to ? (to = this.markers[1]) : null;
    this._decoder
      .reverse(from.lat + ', ' + from.lng)
      .subscribe(
        data => (from.streetAddr = data.address),
        error => (from = error)
      );
    this._decoder
      .reverse(to.lat + ', ' + to.lng)
      .subscribe(data => (to.streetAddr = data.address), error => (to = error));
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
