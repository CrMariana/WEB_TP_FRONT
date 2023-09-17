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
import { authGuard } from './helpers/auth.guard';

const routes: Routes = [

  {path:'evento',component:EventoComponent,canActivate:[authGuard]},
  {path:'docente',component:DocenteComponent,canActivate:[authGuard]},
  {path:'graduado',component:GraduadoComponent,canActivate:[authGuard]},
  {path:'directorio',component:DirectorioComponent,canActivate:[authGuard]},
  {path:'agregarasignatura',component:AgregarasignaturaComponent,canActivate:[authGuard]},
  {path:'agregardocente',component:AgregardocenteComponent,canActivate:[authGuard]},
  {path:'placa',component:PlacaComponent,canActivate:[authGuard]},
  {path:'horario',component:HorarioComponent,canActivate:[authGuard]},
  {path: 'agregarambiente/:id', component: AgregarambienteComponent,canActivate:[authGuard] },
  {path: 'editambiente/:id', component: EditambienteComponent,canActivate:[authGuard] },
  {path:'editambiente',component:EditambienteComponent,canActivate:[authGuard]},
  {path:'agregarambiente',component:AgregarambienteComponent,canActivate:[authGuard]},
  {path:'agregarevento',component:AgregareventoComponent,canActivate:[authGuard]},
  {path:'agregargraduado',component:AgregargraduadoComponent,canActivate:[authGuard]},
  {path:'agregarhorario',component:AgregarhorarioComponent,canActivate:[authGuard]},
  {path: 'agregarplaca',component:AgregarplacaComponent,canActivate:[authGuard]},
  {path: '',component:IniciosesionComponent},
  {path: 'iniciosesion',component:IniciosesionComponent,canActivate:[authGuard]},
  {path:'visitante',component:VisitanteComponent,canActivate:[authGuard]},
  {path:'asignatura',component:AsignaturaComponent,canActivate:[authGuard]},
  {path:'graduado',component:GraduadoComponent,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
