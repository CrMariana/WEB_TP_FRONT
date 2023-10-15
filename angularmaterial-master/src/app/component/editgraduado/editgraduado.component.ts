import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Graduado } from 'src/app/model/Graduado';
import { Placa } from 'src/app/model/Placa';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editgraduado',
  templateUrl: './editgraduado.component.html',
  styleUrls: ['./editgraduado.component.css']
})
export class EditgraduadoComponent implements OnInit {
  graduadoObj: Graduado = new Graduado();
  placas: Placa[] = [];
  alertaNombres: boolean = false;
  alertaApellidos: boolean = false;
  alertaUrl: boolean = false;
  alertaPlaca: boolean = false;
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
          }
        );
      }
    });
  }

  validateUrl(url: string) {
    if (url.trim() === "" || url.trim() === "-") {
      this.alertaUrl = false;
    } else {
      const urlPattern = /^(http:\/\/|https:\/\/)/i;
      this.alertaUrl = !urlPattern.test(url);
    }
  }

  actualizarGraduado() {
    if (
      !this.graduadoObj.nombres?.trim() ||
      !this.graduadoObj.apePaterno?.trim() ||
      !this.graduadoObj.placa ||
      !this.graduadoObj.url?.trim()
    ) {
      this.alertaNombres = !this.graduadoObj.nombres?.trim();
      this.alertaApellidos = !this.graduadoObj.apePaterno?.trim();
      this.alertaPlaca = !this.graduadoObj.placa;
      this.alertaUrl = !this.graduadoObj.url?.trim();
      return;
    } else {
      const urlPattern = /^(http:\/\/|https:\/\/)/i;
      if (!urlPattern.test(this.graduadoObj.url)) {
        this.alertaUrl = true;
        return;
      } else {
        this.alertaNombres = false;
        this.alertaApellidos = false;
        this.alertaPlaca = false;
        this.alertaUrl = false;

        this.service.actualizarGraduado(this.graduadoObj).subscribe(
          (resp: any) => {
            if (resp.Error) {
              console.log(resp);
              // Maneja el error como lo necesites, por ejemplo, mostrar una alerta.
              return;
            } else {
              this.router.navigate(['/graduado']);
            }
          }
        );
      }
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
