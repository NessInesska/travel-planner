import { Routes } from '@angular/router';

import { CityDescriptionPageComponent } from './pages/city-description-page';
import { DefaultPageComponent } from './pages/default-page';
import { FlightsPlanPageComponent } from './pages/flights-plan-page';
import { LoginPageComponent } from './pages/login-page';

export const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  {path: 'default', component: DefaultPageComponent, pathMatch: 'full'},
  {path: 'city', component: CityDescriptionPageComponent, pathMatch: 'full'},
  {path: 'flights', component: FlightsPlanPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'login'},
];
