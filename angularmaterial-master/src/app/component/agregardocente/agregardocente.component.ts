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
  docenteObj: Docente = new Docente;
  alertaNombres: boolean=false;
  alertaApellidos: boolean=false;
  error: boolean=false
  constructor(private router: Router, private service: MasterService) {}

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  guardarDocente() {
    if(!this.docenteObj.nombres?.trim() || !this.docenteObj.apePaterno?.trim()){
      this.alertaNombres=!this.docenteObj.nombres?.trim()
      this.alertaApellidos=!this.docenteObj.apePaterno?.trim()
      return;
    }else{
      this.alertaNombres=false
      this.alertaApellidos=false
      this.service.crearDocente(this.docenteObj).subscribe(
        (resp: any) => {
        if(resp.Error){
          this.error=true;
          return;
        }else{
          console.log(this.docenteObj)
          this.router.navigate(['/docente']);
        }
      });
    }

  }


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
