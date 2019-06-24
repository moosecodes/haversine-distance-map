import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DistanceFinderService {
  constructor(private _http: HttpClient) {}

  getDistance(coords) {
    let { start, end } = coords;
    let body = { start, end };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.post('/api/geocode/distance', body, httpOptions);
  }
}
