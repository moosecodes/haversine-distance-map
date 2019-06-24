import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GeoencodeService {
  constructor(private _http: HttpClient) {}

  geoEncode(streetAddr) {
    let body = { address: streetAddr };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.post('/api/geocode/encode', body, httpOptions);
  }
}
