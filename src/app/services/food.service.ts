import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from '../constants';
import { Food, Meals } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {
  }

  public getFoodByCityId(cityId: string): Observable<Food> {
    return this.http.get<Food>(`${ENDPOINTS.FOOD}/${cityId}`);
  }

  public getMeals(): Observable<Meals> {
    return this.http.get<Meals>(`${ENDPOINTS.MEALS}`);
  }

  public getPriceForMeal(mealTypeId: number): Observable<Food> {
    return this.http.get<Food>(`${ENDPOINTS.MEAL_TYPE}/${mealTypeId}`);
  }
}
