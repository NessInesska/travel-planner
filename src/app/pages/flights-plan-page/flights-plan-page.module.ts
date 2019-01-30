import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchPipe } from '../../pipes/search.pipe';
import { FlightsPlanPageComponent } from './flights-plan-page.component';
import {
  EachFlightFinalDetailsModule,
  FlightInfoComponent,
  FlightFinalDetailsModule,
} from '../../components';

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
    FlightFinalDetailsModule,
    EachFlightFinalDetailsModule,
  ],
  declarations: [
    FlightsPlanPageComponent,
    SearchPipe,
    FlightInfoComponent,
  ],
  exports: [
    FlightsPlanPageComponent,
    FlightInfoComponent,
  ]
})
export class FlightsPlanPageModule {
}
