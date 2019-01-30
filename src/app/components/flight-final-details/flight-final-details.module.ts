import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { EachFlightFinalDetailsModule } from '../each-flight-final-details';

import { FlightFinalDetailsComponent } from './flight-final-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    EachFlightFinalDetailsModule,
  ],
  declarations: [
    FlightFinalDetailsComponent,
  ],
  exports: [
    FlightFinalDetailsComponent,
  ]
})
export class FlightFinalDetailsModule { }
