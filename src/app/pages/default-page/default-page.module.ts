import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule } from '@angular/material';

import { CityCardComponent } from '../../components/city-card';
import { HeaderComponent } from '../../components/header';
import { DefaultPageComponent } from './default-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
  ],
  declarations: [
    HeaderComponent,
    CityCardComponent,
    DefaultPageComponent,
  ],
  exports: [
    HeaderComponent,
    CityCardComponent,
    DefaultPageComponent,
  ]
})
export class DefaultPageModule { }
