import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from '../constants';
import { Hotel } from '../interfaces/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) {
  }

  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${ENDPOINTS.HOTELS}`);
  }

  public getHotelsByCityId(cityId: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${ENDPOINTS.HOTELS}/${cityId}`);
  }

  public getAdultsNumbers(): Observable<number[]> {
    return this.http.get<number[]>(`${ENDPOINTS.ADULTS}`);
  }
}
