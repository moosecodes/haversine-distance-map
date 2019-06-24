import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReverseEncodeService {
  constructor(private _http: HttpClient) {}

  reverse(latlng) {
    let body = { latlng };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.post('/api/geocode/reverse', body, httpOptions);
  }
}
