import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../interfaces/Interfaces';
@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {
  miformulario: FormGroup=this.fb.group({
 
    nombre:["", Validators.required],
    apellido:["", Validators.required],
    direccion:["", Validators.required],
    celular:["", Validators.required],
    edad:["", Validators.required]

  });

  persona={
    nombre:"",
    apellido:"",
    direccion:"",
    celular:"",
    edad:""
  }

    constructor(private router: Router, private fb: FormBuilder) { }
    //Aquí se deben declarar todas las variables
   guardar(){
    
    if(this.miformulario.valid){
      this.persona.nombre= this.miformulario.controls['nombre'].value;
      this.persona.apellido= this.miformulario.controls['apellido'].value;
      this.persona.direccion= this.miformulario.controls['direccion'].value;
      this.persona.celular= this.miformulario.controls['celular'].value;
      this.persona.edad= this.miformulario.controls['edad'].value;

      localStorage.setItem('formPersona', JSON.stringify(this.persona))
      this.router.navigateByUrl("/cuarta");
      console.log("GUARDADO CORRECTAMENTE")
    }
 
  }
  validar(campo: string){

return(this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched )

  }
}
