import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { EachFlightFinalDetailsComponent } from './each-flight-final-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [
    EachFlightFinalDetailsComponent,
  ],
  exports: [
    EachFlightFinalDetailsComponent,
  ]
})
export class EachFlightFinalDetailsModule { }
