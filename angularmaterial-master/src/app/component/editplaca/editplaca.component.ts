import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pabellon } from 'src/app/model/Pabellon';
import { Placa } from 'src/app/model/Placa';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editplaca',
  templateUrl: './editplaca.component.html',
  styleUrls: ['./editplaca.component.css']
})
export class EditplacaComponent implements OnInit {
  placaObj: Placa = new Placa
  pabellonAux: Pabellon = new Pabellon();
  pabellones: Pabellon[] = [];
  alertaUrl: boolean=false;
  alertaId: boolean=false;
  alertaIdExistencia: boolean=false;
  alertaPiso: boolean=false;
  alertaPabellon: boolean=false;
  soloLectura: boolean=true;

  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener la lista de pabellones
    this.service.GetPabellon().subscribe((res: Pabellon[]) => {
      this.pabellones = res;
    });

    this.route.paramMap.subscribe((params) => {
      const parametro = {
        id: params.get("id")
      };
      if (parametro) {
        this.service.BuscarPlaca(parametro).subscribe(
          (res: Placa) => {
            this.placaObj = res;
            if (this.placaObj && this.placaObj.pabellon) {
              this.pabellonAux = this.placaObj.pabellon;
            }
        });
      }
    });
  }

  validateUrl(foto: any) {
    if(foto.target.value==""){
      this.alertaUrl=false;
    }else{
      const urlPattern = /^(http:\/\/|https:\/\/)/i;
      this.alertaUrl=!urlPattern.test(foto.target.value)
    }
  }


  actualizarPlaca() {
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
      this.service.actualizarPlaca(this.placaObj).subscribe(
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


  cerrarSesion() {
    this.service.deleteToken();
    this.router.navigate(['']);
  }

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
