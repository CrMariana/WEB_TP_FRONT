import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregargraduado',
  templateUrl: './agregargraduado.component.html',
  styleUrls: ['./agregargraduado.component.css']
})
export class AgregargraduadoComponent {
  urlLink: string = '';
  invalidUrl: boolean = false;
  anoGraduacion: string = '';
  invalidInput: boolean = false;
  Nombre: string = '';
  ApellidoP: string = '';
  inputNombre: boolean = false;
  inputApellidoP: boolean = false;

  constructor(private router: Router) {}


  validateUrl() {
    // Expresión regular para verificar si es una URL de LinkedIn válida
    const linkedinUrlPattern = /^(https:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/;

    // Verificar si hay contenido en el campo y si no coincide con el patrón
    if (this.urlLink.trim() !== '' && !linkedinUrlPattern.test(this.urlLink)) {
      this.invalidUrl = true;
    } else {
      this.invalidUrl = false;
    }
  }

  validateInput() {
    // Verificar si el valor no es un número
    if (isNaN(Number(this.anoGraduacion))) {
      this.invalidInput = true;
    } else {
      this.invalidInput = false;
    }
  }
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
