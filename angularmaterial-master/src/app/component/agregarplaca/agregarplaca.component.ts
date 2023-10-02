import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pabellon } from 'src/app/model/Pabellon';
import { Placa } from 'src/app/model/Placa';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-agregarplaca',
  templateUrl: './agregarplaca.component.html',
  styleUrls: ['./agregarplaca.component.css']
})
export class AgregarplacaComponent {
  disableInput = false;
  urlFoto: string = '';
  invalidUrl: boolean = false;
  pabellones: Pabellon[] = [];
  id: string = '';
  placas: Placa = new Placa;

  constructor(private router: Router, private service: MasterService) {}

  validateUrl() {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    this.invalidUrl = !urlPattern.test(this.urlFoto);
  }

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.service.GetPabellon().subscribe(res => {
      this.pabellones = res;
    });

    this.placas = new Placa();
  }

  guardarPlaca() {
    this.service.crearPlaca(this.placas).subscribe()
  };

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
