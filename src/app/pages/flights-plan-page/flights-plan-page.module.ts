import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatOptionModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlightsPlanPageComponent } from './flights-plan-page.component';
import { FlightInfoComponent } from '../../components/flight-info';
import { FlightFinalDetailsComponent } from '../../components/flight-final-details';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FlightsPlanPageComponent,
    FlightInfoComponent,
    FlightFinalDetailsComponent,
  ],
  exports: [
    FlightsPlanPageComponent,
    FlightInfoComponent,
    FlightFinalDetailsComponent,
  ]
})
export class FlightsPlanPageModule {
}
