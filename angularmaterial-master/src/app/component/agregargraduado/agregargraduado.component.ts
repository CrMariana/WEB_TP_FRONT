import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Graduado } from 'src/app/model/Graduado';
import { Placa } from 'src/app/model/Placa';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-agregargraduado',
  templateUrl: './agregargraduado.component.html',
  styleUrls: ['./agregargraduado.component.css']
})
export class AgregargraduadoComponent {
  graduadoObj: Graduado = new Graduado();
  placas: Placa[] = [];
  alertaNombres: boolean = false;
  alertaApellidos: boolean = false;
  alertaPlaca: boolean = false;
  alertaUrl: boolean = false;

  constructor(private router: Router, private service: MasterService) {}

  ngOnInit(): void {
    this.service.GetPlaca().subscribe((res) => {
      this.placas = res;
    });
  }

  guardarGraduado() {
    if (!this.graduadoObj.nombres?.trim()) {
      this.alertaNombres = true;
    } else {
      this.alertaNombres = false;
    }

    if (!this.graduadoObj.apePaterno?.trim()) {
      this.alertaApellidos = true;
    } else {
      this.alertaApellidos = false;
    }

    if (!this.graduadoObj.placa) {
      this.alertaPlaca = true;
    } else {
      this.alertaPlaca = false;
    }

    if (!this.graduadoObj.url?.trim()) {
      this.graduadoObj.url = '-';
    }

    if (!this.alertaNombres && !this.alertaApellidos && !this.alertaPlaca) {
      const selectedPlaca = this.placas.find((placa) => placa.id === this.graduadoObj.placa);

      if (!selectedPlaca) {
        console.error('La placa seleccionada no existe.');
        return;
      }

      const graduadoObj = {
        nombres: this.graduadoObj.nombres,
        apePaterno: this.graduadoObj.apePaterno,
        apeMaterno: this.graduadoObj.apeMaterno,
        placa: selectedPlaca,
        url: this.graduadoObj.url,
      };

      this.service.crearGraduado(graduadoObj).subscribe((resp: any) => {
        if (resp.Error) {
          this.alertaUrl = true;
          console.error('Hubo un error al crear el graduado.');
        } else {
          this.router.navigate(['/graduado']);
        }
      });
    }
  }

  cerrarSesion() {
    this.service.deleteToken();
    this.router.navigate(['']);
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
