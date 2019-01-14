import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DefaultPageModule } from './pages/default-page';
import { FlightsPlanPageModule } from './pages/flights-plan-page';
import { LoginPageComponent } from './pages/login-page';
import { CityDescriptionPageModule } from './pages/city-description-page';
import { InMemoryDataService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    DefaultPageModule,
    CityDescriptionPageModule,
    FlightsPlanPageModule,
    //TODO: create module for login page
    DefaultPageModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
