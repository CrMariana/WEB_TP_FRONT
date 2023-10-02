import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MasterService } from 'src/app/service/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { asignatura } from 'src/app/model/Asignatura';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent {
  customerlist !: asignatura[];
  dataSource: any;
  displayedColumns: string[] = ["Asig_Codigo", "Asig_Descripcion", "Asig_Tipo", "Asig_TipoEstudio", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog, private router: Router) {
    this.loadcustomer();
  }

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }
  
  loadcustomer() {
    this.service.GetAsignatura().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<asignatura>(this.customerlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addasignatura(){
    this.router.navigate(['/agregarasignatura']);
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
