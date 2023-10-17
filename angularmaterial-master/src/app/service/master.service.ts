import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Ambiente } from '../model/Ambiente';
import { Area } from '../model/Area';
import { Pabellon } from '../model/Pabellon';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Administrador } from '../model/Administrador';
import { Placa } from '../model/Placa';
import { Docente } from '../model/Docente';
import { Asignatura } from '../model/Asignatura';
import { Graduado } from '../model/Graduado';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  rutaGlobalAmbiente = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/ambiente/'
  rutaGlobalArea = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/area/'
  rutaGlobalPabellon = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/pabellon/'
  rutaGlobalLogin = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/login'
  rutaGlobalPlaca= 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/placa/'
  rutaGlobalDocente='https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/docente/'
  rutaGlobalAsignatura='https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/asignatura/'
  rutaGlobalGraduado='https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/graduado/'


  constructor(private http: HttpClient) { }

  // Métodos Inicio Sesión

  Ingresar(administrador: Administrador){
    return this.http.post(this.rutaGlobalLogin,administrador);
  }

  setToken(idToken: string){
    localStorage.setItem("token",idToken);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  // Métodos Ambiente

  GetAmbiente() {
    return this.http.get<Ambiente[]>(this.rutaGlobalAmbiente + "listar");
  }

  GetArea() {
    return this.http.get<Area[]>(this.rutaGlobalArea + "listar");
  }

  GetPabellon() {
    return this.http.get<Pabellon[]>(this.rutaGlobalPabellon + "listar");
  }

  BuscarAmbiente(id:any) {
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "buscar", id);
  }

  actualizarAmbiente(ambiente: Ambiente) {
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "actualizar", ambiente);
  }

  crearAmbiente(ambiente: Ambiente) {
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "crear", ambiente);
  }

  // Métodos Placa
  GetPlaca() {
    return this.http.get<Placa[]>(this.rutaGlobalPlaca + "listar");
  }

  crearPlaca(placa: Placa) {
    return this.http.post(this.rutaGlobalPlaca + "crear", placa);
  }

  BuscarPlaca(id:any) {
    return this.http.post<Placa>(this.rutaGlobalPlaca + "buscar", id);
  }

  actualizarPlaca(placa: Placa) {
    return this.http.post<Placa>(this.rutaGlobalPlaca + "actualizar", placa);
  }

  // Métodos Docente
  GetDocente() {
    return this.http.get<Docente[]>(this.rutaGlobalDocente + "listar");
  }

  crearDocente(docente: Placa) {
    return this.http.post(this.rutaGlobalDocente + "crear", docente);
  }

  BuscarDocente(id:any) {
    return this.http.post<Docente>(this.rutaGlobalDocente + "buscar", id);
  }

  actualizarDocente(docente: Docente) {
    return this.http.post<Docente>(this.rutaGlobalDocente + "actualizar", docente);
  }

  // Métodos Asignatura
  GetAsignatura() {
    return this.http.get<Asignatura[]>(this.rutaGlobalAsignatura + "listar");
  }

  crearAsignatura(asignatura: Asignatura) {
    return this.http.post(this.rutaGlobalAsignatura + "crear", asignatura);
  }

  buscarAsignatura(id:any) {
    return this.http.post<Asignatura>(this.rutaGlobalAsignatura + "buscar", id);
  }

  actualizarAsignatura(asignatura: Asignatura) {
    return this.http.post(this.rutaGlobalGraduado + "actualizar", asignatura);
  }

  // Métodos Graduado
  GetGraduado() {
    return this.http.get<Graduado[]>(this.rutaGlobalGraduado + "listar");
  }

  crearGraduado(graduado: Graduado) {
    return this.http.post(this.rutaGlobalGraduado + "crear", graduado);
  }

  buscarGraduado(id:any) {
    return this.http.post<Graduado>(this.rutaGlobalGraduado + "buscar", id);
  }

  actualizarGraduado(graduado: Graduado) {
    return this.http.post(this.rutaGlobalGraduado + "actualizar", graduado);
  }


  // Otros Métodos

  GetVisitante() {
    return this.http.get<[]>("");
  }

  GetEvento() {
    return this.http.get<[]>("");
  }

  GetHorario() {
    return this.http.get<[]>("");
  }

}
