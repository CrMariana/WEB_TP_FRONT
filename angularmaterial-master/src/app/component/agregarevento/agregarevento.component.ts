import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-agregarevento',
  templateUrl: './agregarevento.component.html',
  styleUrls: ['./agregarevento.component.css']
})
export class AgregareventoComponent {
  constructor(private router: Router, private service: MasterService) {}

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  //Contenido del menú lateral -->
  visitante(){
    this.router.navigate(['/visitante']);
  }
  asignatura(){
    this.router.navigate(['/asignatura']);
  }

  docente(){
    this.router.navigate(['/docente']);
  }

  graduado(){
    this.router.navigate(['/graduado']);
  }

  evento(){
    this.router.navigate(['/evento']);
  }

  placa(){
    this.router.navigate(['/placa']);
  }

  horario(){
    this.router.navigate(['/horario']);
  }

  directorio(){
    this.router.navigate(['/directorio']);
  }
}
