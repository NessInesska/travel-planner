import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DefaultPageModule } from './pages/default-page';
import { FlightsPlanPageModule } from './pages/flights-plan-page';
import { HotelsPageModule } from './pages/hotels-page';
import { FoodPlanPageModule } from './pages/food-plan-page';
import { LoginPageModule } from './pages/login-page';
import { CityDescriptionPageModule } from './pages/city-description-page';
import { CitiesService } from './services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DefaultPageModule,
    CityDescriptionPageModule,
    FlightsPlanPageModule,
    LoginPageModule,
    DefaultPageModule,
    FoodPlanPageModule,
    HotelsPageModule,
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
  ],
})
export class AppModule { }
