import { environment } from '../../environments/environment';

const BASE_URL = `${environment.baseUrl}`;

const API_PREFIX = '/api';

export const ENDPOINTS = {
  CITIES: `${BASE_URL}${API_PREFIX}/cities`,
};
