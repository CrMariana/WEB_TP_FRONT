import { Component } from '@angular/core';

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

  
}
