import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    LoginPageComponent,
  ]
})
export class LoginPageModule { }
