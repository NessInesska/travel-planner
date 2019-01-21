import { Routes } from '@angular/router';

import { CityDescriptionPageComponent } from './pages/city-description-page';
import { DefaultPageComponent } from './pages/default-page';
import { FlightsPlanPageComponent } from './pages/flights-plan-page';
import { FoodPlanPageComponent } from './pages/food-plan-page';
import { LoginPageComponent } from './pages/login-page';

export const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  {path: 'default', component: DefaultPageComponent, pathMatch: 'full'},
  {path: 'city/:id', component: CityDescriptionPageComponent, pathMatch: 'full'},
  {path: 'city/:id/actions/1', component: FlightsPlanPageComponent, pathMatch: 'full'},
  {path: 'city/:id/actions/2', component: FoodPlanPageComponent, pathMatch: 'full'},
  {path: 'flights', component: FlightsPlanPageComponent, pathMatch: 'full'},
  {path: 'foods', component: FoodPlanPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'login'},
];
