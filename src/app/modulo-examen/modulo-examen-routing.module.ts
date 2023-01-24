import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';

const routes: Routes = [

  {
    path: 'compoa',
    component:ComponenteAComponent
  },
  
  {
    path: 'compob',
    component:ComponenteBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloExamenRoutingModule { }
