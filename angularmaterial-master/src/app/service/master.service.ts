import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Ambiente } from '../Model/Ambiente';
import { Area } from '../Model/Area';
import { Pabellon } from '../Model/Pabellon';

@Injectable({
  providedIn: 'root'
})
export class MasterService  {

  rutaGlobalAmbiente = 'http://localhost:8082/'
  rutaGlobalArea = 'http://localhost:8080/'
  rutaGlobalPabellon = 'http://localhost:8084/'
  
  constructor(private http: HttpClient) { }


  GetAmbiente(){
    return this.http.get<Ambiente[]>(this.rutaGlobalAmbiente+"listarAmbiente");
  }

  GetArea(){
    return this.http.get<Area[]>(this.rutaGlobalArea+"listarArea");
  }

  GetPabellon(){
    return this.http.get<Pabellon[]>(this.rutaGlobalPabellon+"listarPabellon");
  }

  buscarAmbiente(id: string) {
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente+"buscarAmbiente",id);
  }

  GetPlaca(){
    return this.http.get<[]>("");
  }

  GetVisitante(){
    return this.http.get<[]>("");
  }

  GetGraduado(){
    return this.http.get<[]>("");
  }

  GetDocente(){
    return this.http.get<[]>("");
  }

  GetEvento(){
    return this.http.get<[]>("");
  }

  GetHorario(){
    return this.http.get<[]>("");
  }
  
  GetAsignatura(){
    return this.http.get<[]>("");
  }
}
