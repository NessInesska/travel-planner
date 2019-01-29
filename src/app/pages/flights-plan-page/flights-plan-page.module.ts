import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDatepickerModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EachFlightFinalDetailsComponent } from '../../components/each-flight-final-details/each-flight-final-details.component';
import { SearchPipe } from '../../pipes/search.pipe';

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
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  declarations: [
    FlightsPlanPageComponent,
    FlightInfoComponent,
    FlightFinalDetailsComponent,
    EachFlightFinalDetailsComponent,
    SearchPipe,
  ],
  exports: [
    FlightsPlanPageComponent,
    FlightInfoComponent,
    FlightFinalDetailsComponent,
    EachFlightFinalDetailsComponent,
  ]
})
export class FlightsPlanPageModule {
}
