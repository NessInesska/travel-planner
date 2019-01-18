import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from '../constants';
import { Action } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) {
  }

  public getActions(): Observable<Action[]> {
    return this.http.get<Action[]>(`${ENDPOINTS.ACTIONS}`);
  }
}
