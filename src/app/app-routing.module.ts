import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
   path:'componentes',
   loadChildren: ()=> import('./modulo-examen/modulo-examen.module').then(m=>m.ModuloExamenModule)
 
  
  },

   {
    path: '**',
    redirectTo: 'componentes/compoa'
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
