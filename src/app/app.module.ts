import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ModuloExamenRoutingModule } from './modulo-examen/modulo-examen-routing.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloExamenRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
