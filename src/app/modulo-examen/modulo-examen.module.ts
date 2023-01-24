import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloExamenRoutingModule } from './modulo-examen-routing.module';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';


@NgModule({
  declarations: [
    ComponenteAComponent,
    ComponenteBComponent
  ],
  imports: [
    CommonModule,
    ModuloExamenRoutingModule
  ]
})
export class ModuloExamenModule { }
