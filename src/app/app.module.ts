import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DefaultPageModule } from './pages/default-page/default-page.module';
import { LoginPageComponent } from './pages/login-page';
import { DefaultPageComponent } from './pages/default-page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DefaultPageComponent,
  ],
  imports: [
    DefaultPageModule,
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
