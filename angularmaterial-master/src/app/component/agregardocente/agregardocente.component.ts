import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregardocente',
  templateUrl: './agregardocente.component.html',
  styleUrls: ['./agregardocente.component.css']
})
export class AgregardocenteComponent {
  Nombre: string = '';
  ApellidoP: string = '';
  inputNombre: boolean = false;
  inputApellidoP: boolean = false;

  constructor(private router: Router) {}

  validateNombre() {
    // Verificar si el valor no está vacío y contiene números
    if (this.Nombre.trim() !== '' && /\d/.test(this.Nombre)) {
      this.inputNombre = true;
    } else {
      this.inputNombre = false;
    }
  }

  validateApellidoP() {
    // Verificar si el valor no está vacío y contiene números
    if (this.ApellidoP.trim() !== '' && /\d/.test(this.ApellidoP)) {
      this.inputApellidoP = true;
    } else {
      this.inputApellidoP = false;
    }
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
