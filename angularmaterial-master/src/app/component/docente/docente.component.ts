import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MasterService } from 'src/app/service/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Docente } from 'src/app/model/Docente';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {
  docentes:Docente[]=[];
  dataSource: any;
  displayedColumns: string[] = ["Doce_Codigo", "Doce_Nombres", "Doce_Apellido","action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  myFormGroup: FormGroup; 

  constructor(private service: MasterService, private dialog: MatDialog, private router: Router, private fb: FormBuilder) {
    this.myFormGroup = this.fb.group({
      id: new FormControl('', [Validators.required])
    });
    this.loadcustomer();
  }

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  editDocente(id: string) {
    this.router.navigate(['/editdocente',id]);
  }

  loadcustomer() {
    this.service.GetDocente().subscribe(res => {
      this.docentes = res;
      this.dataSource = new MatTableDataSource<Docente>(this.docentes);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  adddocente(){
    this.router.navigate(['/agregardocente']);
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
