import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDividerModule, MatIconModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlacePlanningCostsComponent } from '../../components/place-planning-costs';

import { CityDescriptionPageComponent } from './city-description-page.component';

@NgModule({
  //TODO: add needed modules and remove them from app module
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
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
