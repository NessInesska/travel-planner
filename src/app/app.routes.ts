import { Routes } from '@angular/router';

import { DefaultPageComponent } from './pages/default-page';
import { LoginPageComponent } from './pages/login-page';

export const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  {path: 'default', component: DefaultPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'login'},
];
