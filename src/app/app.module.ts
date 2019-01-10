import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DefaultPageModule } from './pages/default-page';
import { LoginPageComponent } from './pages/login-page';
import { CityDescriptionPageModule } from './pages/city-description-page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    DefaultPageModule,
    CityDescriptionPageModule,
    //TODO: create module for login page
    DefaultPageModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
