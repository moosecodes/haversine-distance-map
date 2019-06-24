import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  constructor() {}

  lat: number = 41.9279137;
  lng: number = -87.70827489999999;

  ngOnInit() {}
}
