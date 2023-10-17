import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from 'src/app/model/Docente';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editdocente',
  templateUrl: './editdocente.component.html',
  styleUrls: ['./editdocente.component.css']
})
export class EditdocenteComponent {
  docenteObj: Docente =new Docente
  alertaNombres: boolean=false;
  alertaApellidos: boolean=false;
  soloLectura: boolean=true;
  error: boolean=false;


  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener el ID del docente desde los parámetros de la ruta
    this.route.paramMap.subscribe((params:any) => {
      const parametro = {
        id:parseInt(params.get("id"))
      }; // Inicializar id con una cadena vacía si params.get('id') es null o undefined
        this.service.BuscarDocente(parametro).subscribe(
          res =>{
            this.docenteObj=res;
            console.log(res)
          }
        )
        console.log(parametro);
      });
  }

  // Guardar los cambios en el docente
  actualizarDocente() {
    if(!this.docenteObj.nombres?.trim() || !this.docenteObj.apePaterno?.trim()){
      this.alertaNombres=!this.docenteObj.nombres?.trim()
      this.alertaApellidos=!this.docenteObj.apePaterno?.trim()
      return;
    }else{
      this.alertaNombres=false
      this.alertaApellidos=false
      this.service.actualizarDocente(this.docenteObj).subscribe(
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

  // Métodos de navegación
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
