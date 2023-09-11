import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { AgregarplacaComponent } from './component/agregarplaca/agregarplaca.component';
import { AgregarhorarioComponent } from './component/agregarhorario/agregarhorario.component';
import { AgregargraduadoComponent } from './component/agregargraduado/agregargraduado.component';
import { AgregareventoComponent } from './component/agregarevento/agregarevento.component';
import { AgregarambienteComponent } from './component/agregarambiente/agregarambiente.component';
import { EditambienteComponent } from './component/editambiente/editambiente.component';
import { HorarioComponent } from './component/horario/horario.component';
import { PlacaComponent } from './component/placa/placa.component';
import { AgregardocenteComponent } from './component/agregardocente/agregardocente.component';
import { AgregarasignaturaComponent } from './component/agregarasignatura/agregarasignatura.component';
import { DirectorioComponent } from './component/directorio/directorio.component';
import { GraduadoComponent } from './component/graduado/graduado.component';
import { DocenteComponent } from './component/docente/docente.component';
import { EventoComponent } from './component/evento/evento.component';
import { VisitanteComponent } from './component/visitante/visitante.component';
import { AsignaturaComponent } from './component/asignatura/asignatura.component';

const routes: Routes = [

  {path:'evento',component:EventoComponent},
  {path:'docente',component:DocenteComponent},
  {path:'graduado',component:GraduadoComponent},
  {path:'directorio',component:DirectorioComponent},
  {path:'agregarasignatura',component:AgregarasignaturaComponent},
  {path:'agregardocente',component:AgregardocenteComponent},
  {path:'placa',component:PlacaComponent},
  {path:'horario',component:HorarioComponent},
  {path: 'agregarambiente/:id', component: AgregarambienteComponent },
  {path: 'editambiente/:id', component: EditambienteComponent },
  {path:'editambiente',component:EditambienteComponent},
  {path:'agregarambiente',component:AgregarambienteComponent},
  {path:'agregarevento',component:AgregareventoComponent},
  {path:'agregargraduado',component:AgregargraduadoComponent},
  {path:'agregarhorario',component:AgregarhorarioComponent},
  {path: 'agregarplaca',component:AgregarplacaComponent},
  {path: '',component:IniciosesionComponent},
  {path: 'iniciosesion',component:IniciosesionComponent},
  {path:'visitante',component:VisitanteComponent},
  {path:'asignatura',component:AsignaturaComponent},
  {path:'graduado',component:GraduadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
