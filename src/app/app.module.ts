import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { createFillingComponent } from './createFilling/createFilling.component';
import { showFillingComponent } from './showFilling/showFilling.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    createFillingComponent,
    showFillingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
