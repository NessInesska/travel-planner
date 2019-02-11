import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { EachFlightFinalDetailsModule } from '../each-flight-final-details';

import { TotalPriceCounterComponent } from './total-price-counter.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    EachFlightFinalDetailsModule,
  ],
  declarations: [
    TotalPriceCounterComponent,
  ],
  exports: [
    TotalPriceCounterComponent,
  ]
})
export class TotalPriceCounterModule { }
