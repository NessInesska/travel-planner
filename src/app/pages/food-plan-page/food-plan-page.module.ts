import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule, MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FoodPlanPageComponent } from './food-plan-page.component';

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
  ],
  declarations: [
    FoodPlanPageComponent,
  ],
  exports: [
    FoodPlanPageComponent,
  ]
})
export class FoodPlanPageModule { }
