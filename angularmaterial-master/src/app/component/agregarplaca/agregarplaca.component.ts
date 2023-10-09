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
  pabellones: Pabellon[] = [];
  placaObj: Placa = new Placa;
  alertaUrl: boolean=false;
  alertaId: boolean=false;
  alertaIdExistencia: boolean=false;
  alertaPiso: boolean=false;
  alertaPabellon: boolean=false;

  constructor(private router: Router, private service: MasterService) {}

  validateUrl(foto: any){
    if(foto.target.value==""){
      this.alertaUrl=false;
    }else{
      const urlPattern = /^(http:\/\/|https:\/\/)/i;
      this.alertaUrl=!urlPattern.test(foto.target.value)
    }
  }

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.service.GetPabellon().subscribe(res => {
      this.pabellones = res;
    });

    this.placaObj = new Placa();
  }

  guardarPlaca() {
    const urlPattern = /^(http:\/\/|https:\/\/)/i;
    if(this.placaObj.id?.trim().length!=7 || !this.placaObj.pabellon || !this.placaObj.foto?.trim() || !urlPattern.test(this.placaObj.foto) || !this.placaObj.piso?.trim()){
      if(this.placaObj.id?.trim().length!=7){
        this.alertaId=true;
      }else{
        this.alertaId=false;
      }
      this.alertaPiso=!this.placaObj.piso
      this.alertaPabellon=!this.placaObj.pabellon
      this.alertaUrl=!this.placaObj.foto?.trim()
      if(!urlPattern.test(this.placaObj.foto!)){
        this.alertaUrl=!urlPattern.test(this.placaObj.foto!)
      }

      return;
    }else{
      this.alertaId=false
      this.service.crearPlaca(this.placaObj).subscribe(
        (resp: any) => {
        if(resp.Error){
          this.alertaIdExistencia=true;
          console.log(resp)
          return;
        }else{

          this.router.navigate(['/placa']);
        }
      });
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
