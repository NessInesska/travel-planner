import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningPagesHeaderComponent } from './planning-pages-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlanningPagesHeaderComponent,
  ],
  exports: [
    PlanningPagesHeaderComponent,
  ]
})
export class PlanningPagesHeaderModule { }
