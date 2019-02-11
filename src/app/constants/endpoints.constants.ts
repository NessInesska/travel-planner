import { environment } from '../../environments/environment';

const BASE_URL = `${environment.baseUrl}`;

const API_PREFIX = '/api';

export const ENDPOINTS = {
  CITIES: `${BASE_URL}${API_PREFIX}/cities`,
  ACTIONS: `${BASE_URL}${API_PREFIX}/actions`,
  FLIGHTS: `${BASE_URL}${API_PREFIX}/flights`,
  HOTELS: `${BASE_URL}${API_PREFIX}/hotels`,
  HOTEL: `${BASE_URL}${API_PREFIX}/hotels/hotel`,
  ADULTS: `${BASE_URL}${API_PREFIX}/adults`,
  FOOD: `${BASE_URL}${API_PREFIX}/food`,
  MEAL_TYPE: `${BASE_URL}${API_PREFIX}/food/mealType`,
  MEALS: `${BASE_URL}${API_PREFIX}/meals`,
};
