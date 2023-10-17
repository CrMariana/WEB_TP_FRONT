import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master.service';
import { Router } from '@angular/router';
import { Placa } from 'src/app/model/Placa';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-placa',
  templateUrl: './placa.component.html',
  styleUrls: ['./placa.component.css']
})

export class PlacaComponent {
  placas: Placa[] = [];
  dataSource: any;
  displayedColumns: string[] = ["Plac_Codigo", "Plac_Piso", "Pabe_Codigo", "action"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  myFormGroup: FormGroup; // Agregamos el FormGroup aquí

  constructor(private service: MasterService, private dialog: MatDialog, private router: Router, private fb: FormBuilder) {
    this.myFormGroup = this.fb.group({
      id: new FormControl('', [Validators.required])
    });

    this.loadcustomer();
  }

  cerrarSesion() {
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  loadcustomer(): void {
    this.service.GetPlaca().subscribe(res => {
      this.placas = res;
      this.dataSource = new MatTableDataSource<Placa>(this.placas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addplaca() {
    this.router.navigate(['/agregarplaca']);
  }

  editPlaca(id: string) {
    this.router.navigate(['/editplaca', id]);
  }

  // Contenido del menú lateral -->
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
