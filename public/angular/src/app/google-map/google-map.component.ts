import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  constructor() {}

  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
    // map = new google.maps.Map(document.getElementById('map'), {
    //   center: {
    //     lat: 41.9279137,
    //     lng: -87.70827489999999,
    //   },
    //   zoom: 12,
    //   styles: [
    //     {
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#ebe3cd',
    //         },
    //       ],
    //     },
    //     {
    //       elementType: 'labels.text.fill',
    //       stylers: [
    //         {
    //           color: '#523735',
    //         },
    //       ],
    //     },
    //     {
    //       elementType: 'labels.text.stroke',
    //       stylers: [
    //         {
    //           color: '#f5f1e6',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'administrative',
    //       elementType: 'geometry.stroke',
    //       stylers: [
    //         {
    //           color: '#c9b2a6',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'administrative.land_parcel',
    //       elementType: 'geometry.stroke',
    //       stylers: [
    //         {
    //           color: '#dcd2be',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'administrative.land_parcel',
    //       elementType: 'labels.text.fill',
    //       stylers: [
    //         {
    //           color: '#ae9e90',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'landscape.natural',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#dfd2ae',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'poi',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#dfd2ae',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'poi',
    //       elementType: 'labels.text.fill',
    //       stylers: [
    //         {
    //           color: '#93817c',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'poi.park',
    //       elementType: 'geometry.fill',
    //       stylers: [
    //         {
    //           color: '#a5b076',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'poi.park',
    //       elementType: 'labels.text.fill',
    //       stylers: [
    //         {
    //           color: '#447530',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'road',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#f5f1e6',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'road.arterial',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#fdfcf8',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'road.highway',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#f8c967',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'road.highway',
    //       elementType: 'geometry.stroke',
    //       stylers: [
    //         {
    //           color: '#e9bc62',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'road.highway.controlled_access',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#e98d58',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'road.highway.controlled_access',
    //       elementType: 'geometry.stroke',
    //       stylers: [
    //         {
    //           color: '#db8555',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'road.local',
    //       elementType: 'labels.text.fill',
    //       stylers: [
    //         {
    //           color: '#806b63',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'transit.line',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#dfd2ae',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'transit.line',
    //       elementType: 'labels.text.fill',
    //       stylers: [
    //         {
    //           color: '#8f7d77',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'transit.line',
    //       elementType: 'labels.text.stroke',
    //       stylers: [
    //         {
    //           color: '#ebe3cd',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'transit.station',
    //       elementType: 'geometry',
    //       stylers: [
    //         {
    //           color: '#dfd2ae',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'water',
    //       elementType: 'geometry.fill',
    //       stylers: [
    //         {
    //           color: '#b9d3c2',
    //         },
    //       ],
    //     },
    //     {
    //       featureType: 'water',
    //       elementType: 'labels.text.fill',
    //       stylers: [
    //         {
    //           color: '#92998d',
    //         },
    //       ],
    //     },
    //   ],
    // });
  }
}
