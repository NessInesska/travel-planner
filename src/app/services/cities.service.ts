import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from '../constants';
import { City } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  public city: City;

  constructor(private http: HttpClient) {
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${ENDPOINTS.CITIES}`);
  }

  public getCityById(id: string): Observable<City> {
    return this.http.get<City>(`${ENDPOINTS.CITIES}/${id}`)
  }
}
