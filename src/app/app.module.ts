import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginPageComponent } from './pages/login-page';
import { DefaultPageComponent } from './pages/default-page/default-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
