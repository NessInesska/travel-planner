import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { HeaderComponent } from '../../components/header';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class DefaultPageModule { }
