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
  disableInput = false;
  descripcion: string= '';
  tipoAsig: string= '';
  tipoEstudio: string = '';
  id: string = '';
  asignaturas: Asignatura = new Asignatura;


  constructor(private router: Router, private service: MasterService) { }

  cerrarSesion() {
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  guardarAsignatura() {
    this.service.crearAsignatura(this.asignaturas).subscribe(() => {
      // Redireccionar a la vista de "placas" después de guardar con éxito
      this.router.navigate(['/asignatura']);
    });
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
