import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarplaca',
  templateUrl: './agregarplaca.component.html',
  styleUrls: ['./agregarplaca.component.css']
})
export class AgregarplacaComponent {
  urlFoto: string = '';
  invalidUrl: boolean = false;

  constructor(private router: Router) {}

  validateUrl() {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    this.invalidUrl = !urlPattern.test(this.urlFoto);
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
