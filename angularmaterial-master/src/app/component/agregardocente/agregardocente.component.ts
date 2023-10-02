import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/model/Docente';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-agregardocente',
  templateUrl: './agregardocente.component.html',
  styleUrls: ['./agregardocente.component.css']
})
export class AgregardocenteComponent {
  nombres: string = '';
  apePaterno: string = '';
  inputNombre: boolean = false;
  inputApellidoP: boolean = false;
  docentes: Docente = new Docente;

  constructor(private router: Router, private service: MasterService) {}

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  validateNombre() {
    // Verificar si el valor no está vacío y contiene números
    if (this.nombres.trim() !== '' && /\d/.test(this.nombres)) {
      this.inputNombre = true;
    } else {
      this.inputNombre = false;
    }
  }

  guardarDocente() {
    this.service.crearDocente(this.docentes).subscribe(() => {
      // Redireccionar a la vista de "placas" después de guardar con éxito
      this.router.navigate(['/docente']);
    });
  }

  validateApellidoP() {
    // Verificar si el valor no está vacío y contiene números
    if (this.apePaterno.trim() !== '' && /\d/.test(this.apePaterno)) {
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
