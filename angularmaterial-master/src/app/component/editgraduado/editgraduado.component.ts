import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Graduado } from 'src/app/model/Graduado';
import { Placa } from 'src/app/model/Placa';
import { MasterService } from 'src/app/service/master.service';
import { NgForm } from '@angular/forms'; // Importamos NgForm

@Component({
  selector: 'app-editgraduado',
  templateUrl: './editgraduado.component.html',
  styleUrls: ['./editgraduado.component.css']
})
export class EditgraduadoComponent implements OnInit {
  graduadoObj: Graduado = new Graduado
  placaAux: Placa =new Placa();
  placas: Placa[] = [];
  alertaNombres: boolean = false;
  alertaApellidos: boolean = false;
  alertaPlaca: boolean = false;
  error: boolean = false;
  soloLectura: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router
  ) {}


  ngOnInit(): void {
    // Obtener la lista de placas
    this.service.GetPlaca().subscribe((res: Placa[]) => {
      this.placas = res;
    });

    this.route.paramMap.subscribe((params) => {
      const parametro = {
        id: params.get("id")
      };
      if (parametro) {
        this.service.buscarGraduado(parametro).subscribe(
          (res: Graduado) => {
            this.graduadoObj = res;
            if (this.graduadoObj && this.graduadoObj.placa) {
              this.placaAux = this.graduadoObj.placa;
            }
        });
      }
    });
  }


  actualizarGraduado() {
    // Validar campos obligatorios
    if (
      !this.graduadoObj.nombres?.trim() ||
      !this.graduadoObj.apePaterno?.trim() ||
      this.graduadoObj.placa === null // Agregado para validar la placa
    ) {
      this.alertaNombres = !this.graduadoObj.nombres?.trim();
      this.alertaApellidos = !this.graduadoObj.apePaterno?.trim();
      this.alertaPlaca = this.graduadoObj.placa === null;
      return;
    } else {
      this.alertaNombres = false;
      this.alertaApellidos = false;
      this.alertaPlaca = false;
  
      this.service.actualizarGraduado(this.graduadoObj).subscribe(
        (resp: any) => {
          if (resp.Error) {
            this.error = true;
            console.log(resp);
            return;
          } else {
            console.log(resp);
            this.router.navigate(['/graduado']);
          }
        }
      );
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
