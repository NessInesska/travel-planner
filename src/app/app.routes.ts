import { Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page';

export const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  {path: 'default', component: LoginPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'login'},
];
