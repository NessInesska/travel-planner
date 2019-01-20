import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from '../constants';
import { Flight } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) {
  }

  public getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${ENDPOINTS.FLIGHTS}`);
  }
}
