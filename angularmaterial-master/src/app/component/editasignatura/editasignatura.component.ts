import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/model/Asignatura';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editasignatura',
  templateUrl: './editasignatura.component.html',
  styleUrls: ['./editasignatura.component.css']
})
export class EditasignaturaComponent {

  asignaturaObj: Asignatura= new Asignatura;
  alertaNombre: boolean=false;
  alertaTipoAsig: boolean=false;
  alertaTipoEstudio: boolean=false;
  error: boolean=false;
  soloLectura: boolean=true;

  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Obtener el ID del docente desde los parámetros de la ruta
    this.route.paramMap.subscribe((params:any) => {
      const parametro = {
        id:parseInt(params.get("id"))
      }; // Inicializar id con una cadena vacía si params.get('id') es null o undefined
        this.service.buscarAsignatura(parametro).subscribe(
          res =>{
            this.asignaturaObj=res;
            console.log(res)
          }
        )
        console.log(parametro);
      });
  }

  cerrarSesion() {
    this.service.deleteToken();
    this.router.navigate(['']);
  }


  actualizarAsignatura(){
    if(!this.asignaturaObj.descripcion?.trim() || !this.asignaturaObj.tipoAsig?.trim() || !this.asignaturaObj.tipoEstudio?.trim()){
      this.alertaNombre=!this.asignaturaObj.descripcion?.trim();
      this.alertaTipoAsig=!this.asignaturaObj.tipoAsig?.trim()
      this.alertaTipoEstudio=!this.asignaturaObj.tipoEstudio?.trim()
      return;
    }else{
      this.alertaNombre=false
      this.alertaTipoAsig=false
      this.alertaTipoEstudio=false
      this.service.actualizarAsignatura(this.asignaturaObj).subscribe(
        (resp: any) => {
        if(resp.Error){
          this.error=true;
          return;
        }else{
          console.log(resp)
          this.router.navigate(['/asignatura']);
        }
      });
    }

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
