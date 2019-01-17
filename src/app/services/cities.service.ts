import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from '../constants/endpoints.constants';
import { City } from '../interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) {
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${ENDPOINTS.CITIES}`);
  }
}
