import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router, Routes } from '@angular/router';
import { visitante } from 'src/app/model/Visitante';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent {

  customerlist !: visitante[];
  dataSource: any;
  displayedColumns: string[] = ["Visi_Dni", "Visi_Nombres", "Visi_Correo", "Visi_Celular", "Ocup_codigo"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(private service: MasterService, private dialog: MatDialog, private router: Router) {
    this.loadcustomer();
  }

  loadcustomer() {
    this.service.GetVisitante().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<visitante>(this.customerlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addVisitante(){
    this.router.navigate(['/agregarvisitante'])
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
