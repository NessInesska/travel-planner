import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { CityCardComponent } from '../../components/city-card';
import { HeaderComponent } from '../../components/header';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
    CityCardComponent,
  ],
  exports: [
    HeaderComponent,
    CityCardComponent,
  ]
})
export class DefaultPageModule { }
