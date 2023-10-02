import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitanteComponent } from './component/visitante/visitante.component';
import { PlacaComponent } from './component/placa/placa.component';
import { HorarioComponent } from './component/horario/horario.component';
import { GraduadoComponent } from './component/graduado/graduado.component';
import { EventoComponent } from './component/evento/evento.component';
import { DocenteComponent } from './component/docente/docente.component';
import { DirectorioComponent } from './component/directorio/directorio.component';
import { AsignaturaComponent } from './component/asignatura/asignatura.component';
import { EditeventoComponent } from './component/editevento/editevento.component';
import { EditambienteComponent } from './component/editambiente/editambiente.component';
import { AgregarplacaComponent } from './component/agregarplaca/agregarplaca.component';
import { AgregarhorarioComponent } from './component/agregarhorario/agregarhorario.component';
import { AgregargraduadoComponent } from './component/agregargraduado/agregargraduado.component';
import { AgregareventoComponent } from './component/agregarevento/agregarevento.component';
import { AgregardocenteComponent } from './component/agregardocente/agregardocente.component';
import { AgregarasignaturaComponent } from './component/agregarasignatura/agregarasignatura.component';
import { AgregarambienteComponent } from './component/agregarambiente/agregarambiente.component';
import { MaterialModule } from './material-module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { EditplacaComponent } from './component/editplaca/editplaca.component';
import { EditdocenteComponent } from './component/editdocente/editdocente.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    VisitanteComponent,
    PlacaComponent,
    HorarioComponent,
    GraduadoComponent,
    EventoComponent,
    DocenteComponent,
    DirectorioComponent,
    AsignaturaComponent,
    EditeventoComponent,
    EditambienteComponent,
    AgregarplacaComponent,
    AgregarhorarioComponent,
    AgregargraduadoComponent,
    AgregareventoComponent,
    AgregardocenteComponent,
    AgregarasignaturaComponent,
    AgregarambienteComponent,
    EditplacaComponent,
    EditdocenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
