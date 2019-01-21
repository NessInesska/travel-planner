import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GoogleSignInComponent } from 'angular-google-signin';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginPageComponent } from './pages/login-page';
import { DefaultPageComponent } from './pages/default-page';
import { DefaultPageModule } from './pages/default-page';
import { FlightsPlanPageModule } from './pages/flights-plan-page';
import { FoodPlanPageModule } from './pages/food-plan-page';
import { LoginPageModule } from './pages/login-page';
import { CityDescriptionPageModule } from './pages/city-description-page';
import { CitiesService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DefaultPageComponent,
    GoogleSignInComponent
  ],
  imports: [
    DefaultPageModule,
    CityDescriptionPageModule,
    FlightsPlanPageModule,
    LoginPageModule,
    DefaultPageModule,
    FoodPlanPageModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    CitiesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
