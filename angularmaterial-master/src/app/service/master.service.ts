import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Ambiente } from '../model/Ambiente';
import { Area } from '../model/Area';
import { Pabellon } from '../model/Pabellon';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Administrador } from '../model/Administrador';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  rutaGlobalAmbiente = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/ambiente/'
  rutaGlobalArea = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/area/'
  rutaGlobalPabellon = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/pabellon/'
  rutaGlobalLogin = 'https://doboz63dga.execute-api.us-east-2.amazonaws.com/pro/login'

  constructor(private http: HttpClient) { }

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

  GetAmbiente() {
    return this.http.get<Ambiente[]>(this.rutaGlobalAmbiente + "listar");
  }

  GetArea() {
    return this.http.get<Area[]>(this.rutaGlobalArea + "listar");
  }

  GetPabellon() {
    return this.http.get<Pabellon[]>(this.rutaGlobalPabellon + "listar");
  }

  BuscarAmbiente(id: string) {
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "buscar", id);
  }

  actualizarAmbiente(ambiente: Ambiente) {
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "actualizar", ambiente);
  }

  crearAmbiente(ambiente: Ambiente) {
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "crear", ambiente);
  }

  // Otros métodos
  GetPlaca() {
    return this.http.get<[]>("");
  }

  GetVisitante() {
    return this.http.get<[]>("");
  }

  GetGraduado() {
    return this.http.get<[]>("");
  }

  GetDocente() {
    return this.http.get<[]>("");
  }

  GetEvento() {
    return this.http.get<[]>("");
  }

  GetHorario() {
    return this.http.get<[]>("");
  }

  GetAsignatura() {
    return this.http.get<[]>("");
  }
}
