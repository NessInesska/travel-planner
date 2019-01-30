import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EachFlightFinalDetailsModule } from '../../components/each-flight-final-details';
import { FlightFinalDetailsModule } from '../../components/flight-final-details';
import { HotelCardComponent } from '../../components/hotel-card';
import { PlanningPagesHeaderModule } from '../../components/planning-pages-header';
import { HotelsPageComponent } from './hotels-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatOptionModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PlanningPagesHeaderModule,
    EachFlightFinalDetailsModule,
    FlightFinalDetailsModule,
    MatCardModule,
  ],
  declarations: [
    HotelsPageComponent,
    HotelCardComponent,
  ],
  exports: [
    HotelsPageComponent,
    HotelCardComponent,
  ]
})
export class HotelsPageModule {
}
