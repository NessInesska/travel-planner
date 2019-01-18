import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { PlacePlanningCostsComponent } from '../../components/place-planning-costs';
import { CityDescriptionPageComponent } from './city-description-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    CityDescriptionPageComponent,
    PlacePlanningCostsComponent,
  ],
  exports: [
    CityDescriptionPageComponent,
    PlacePlanningCostsComponent,
  ]
})
export class CityDescriptionPageModule { }
