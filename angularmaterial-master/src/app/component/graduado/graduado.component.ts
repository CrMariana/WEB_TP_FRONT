import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master.service';
import { Router } from '@angular/router';
import { Graduado } from 'src/app/model/Graduado';
import { Placa } from 'src/app/model/Placa';
@Component({
  selector: 'app-graduado',
  templateUrl: './graduado.component.html',
  styleUrls: ['./graduado.component.css']
})
export class GraduadoComponent {
  placas: Placa[] = [];
  customerlist !: Graduado[];
  dataSource: any;
  displayedColumns: string[] = ["id", "nombres", "url","placa","action"];
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
    this.service.GetGraduado().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Graduado>(this.customerlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editGraduado(id: string) {
    this.router.navigate(['/editgraduado', id]);
  }

  addgraduado(){
    this.router.navigate(['/agregargraduado']);
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
