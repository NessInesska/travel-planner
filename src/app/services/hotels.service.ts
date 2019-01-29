import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../constants';

import { Hotel } from '../interfaces/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) {
  }

  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${ENDPOINTS.HOTELS}`);
  }

  public getHotelById(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(`${ENDPOINTS.HOTELS}/${id}`);
  }
}
