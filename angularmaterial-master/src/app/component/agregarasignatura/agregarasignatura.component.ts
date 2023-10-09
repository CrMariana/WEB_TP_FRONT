import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/model/Asignatura';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-agregarasignatura',
  templateUrl: './agregarasignatura.component.html',
  styleUrls: ['./agregarasignatura.component.css']
})
export class AgregarasignaturaComponent {

  asignaturaObj: Asignatura = new Asignatura;
  alertaNombre: boolean=false;
  alertaTipoAsig: boolean=false;
  alertaTipoEstudio: boolean=false;
  error: boolean=false;

  constructor(private router: Router, private service: MasterService) { }

  cerrarSesion() {
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  guardarAsignatura() {
    if(!this.asignaturaObj.descripcion?.trim() || !this.asignaturaObj.tipoAsig?.trim() || !this.asignaturaObj.tipoEstudio?.trim()){
      this.alertaNombre=!this.asignaturaObj.descripcion?.trim();
      this.alertaTipoAsig=!this.asignaturaObj.tipoAsig?.trim()
      this.alertaTipoEstudio=!this.asignaturaObj.tipoEstudio?.trim()
      return;
    }else{
      this.alertaNombre=false
      this.alertaTipoAsig=false
      this.alertaTipoEstudio=false
      this.service.crearAsignatura(this.asignaturaObj).subscribe(
        (resp: any) => {
        // Lógica adicional después de guardar, si es necesario
        if(resp.Error){
          this.error=true;
          return;
        }else{
          this.router.navigate(['/asignatura']);
        }
      });
    }
  }

  //Contenido del menú lateral -->
  visitante() {
    this.router.navigate(['/visitante']);
  }
  asignatura() {
    this.router.navigate(['/asignatura']);
  }

  docente() {
    this.router.navigate(['/docente']);
  }

  graduado() {
    this.router.navigate(['/graduado']);
  }

  evento() {
    this.router.navigate(['/evento']);
  }

  placa() {
    this.router.navigate(['/placa']);
  }

  horario() {
    this.router.navigate(['/horario']);
  }

  directorio() {
    this.router.navigate(['/directorio']);
  }

}
