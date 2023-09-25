import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambiente } from 'src/app/model/Ambiente';
import { Area } from 'src/app/model/Area';
import { Pabellon } from 'src/app/model/Pabellon';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-agregarambiente',
  templateUrl: './agregarambiente.component.html',
  styleUrls: ['./agregarambiente.component.css']
})
export class AgregarambienteComponent {
  disableInput = false;
  ambiente: Ambiente = new Ambiente;
  areas: Area[] = [];
  pabellones: Pabellon[] = [];
  id: string = '';
  urlFoto: string = '';
  invalidUrl: boolean = false;

  mostrarAlertaCodigo: boolean = false;
  mostrarAlertaCodigoExistencia: boolean = false;
  mostrarAlertaDescripcion: boolean = false;
  mostrarAlertaArea: boolean = false;
  mostrarAlertaPabellon: boolean = false;
  mostrarAlertaPiso: boolean = false;
  mostrarAlertaFoto: boolean = false;
  mostrarAlertaContacto: boolean = false;
  mostrarAlertaHorario: boolean = false;
  mostrarAlertaReferencia: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router
  ) { }

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    // Llama a los métodos GetArea y GetPabellon para cargar los datos en las listas correspondientes
    this.service.GetArea().subscribe(res => {
      this.areas = res;
    });

    this.service.GetPabellon().subscribe(res => {
      this.pabellones = res;
    });

    this.ambiente = new Ambiente();
  }

  guardarAmbiente() {


    const codigoRegex = /^[A-Z]{2}\d{2}$/;

    const urlPattern = /^(http:\/\/|https:\/\/)/i;

    const contactoPattern = /^[a-z0-9._%+-]+@usmp\.pe$/;



    if (!this.ambiente.id?.trim()|| !codigoRegex.test(this.ambiente.id?.trim()) || !this.ambiente.descripcion?.trim() || !this.ambiente.area || !this.ambiente.pabellon || !this.ambiente.piso?.trim() || !this.ambiente.foto?.trim() || !urlPattern.test(this.ambiente.foto) || !this.ambiente.contacto?.trim() || !contactoPattern.test(this.ambiente.contacto?.trim()) || !this.ambiente.horario?.trim() || !this.ambiente.referencia?.trim()){
      // Mostrar alertas para campos vacíos

      this.mostrarAlertaCodigo = !this.ambiente.id?.trim();
      if(this.ambiente.id){
        this.mostrarAlertaCodigo = !codigoRegex.test(this.ambiente.id?.trim());
      }
      this.mostrarAlertaDescripcion = !this.ambiente.descripcion?.trim();
      this.mostrarAlertaPabellon = !this.ambiente.pabellon;
      this.mostrarAlertaArea = !this.ambiente.area;
      this.mostrarAlertaPiso = !this.ambiente.piso?.trim();
      this.mostrarAlertaFoto = !this.ambiente.foto?.trim();
      if(this.ambiente.foto){
        this.mostrarAlertaFoto=!urlPattern.test(this.ambiente.foto?.trim());
      }
      this.mostrarAlertaContacto = !this.ambiente.contacto?.trim();
      if(this.ambiente.contacto){
        this.mostrarAlertaContacto=!contactoPattern.test(this.ambiente.contacto?.trim());
      }
      this.mostrarAlertaHorario = !this.ambiente.horario?.trim();
      this.mostrarAlertaReferencia = !this.ambiente.referencia?.trim();
      return;
    }

    // Si todos los campos están completos y válidos, procede a guardar los datos
    this.service.crearAmbiente(this.ambiente).subscribe(
      (resp: any) => {
      // Lógica adicional después de guardar, si es necesario
      if(resp.Error==="El id ya existe"){
        this.mostrarAlertaCodigoExistencia=true;
        return;
      }else{
        this.router.navigate(['/directorio']);
      }
    });


  }

  //validación de ingreso de dato ID
  validateCodigoFormat(event: any) {
    const codigo = event.target.value;

    // Expresión regular para verificar el formato (2 letras mayúsculas seguidas de 2 números)
    const codigoRegex = /^[A-Z]{2}\d{2}$/;

    if (codigo === '') {
      this.mostrarAlertaCodigo = false; // Si el campo está vacío, ocultar la alerta
    } else if (!codigoRegex.test(codigo)) {
      this.mostrarAlertaCodigo = true; // Si no cumple el formato, mostrar la alerta
    } else {
      this.mostrarAlertaCodigo = false; // Si cumple el formato, ocultar la alerta
    }
  }


  loadArea() {
    this.service.GetArea().subscribe(res => {
      this.areas = res;
    });
  }

  loadPabellon() {
    this.service.GetPabellon().subscribe(res => {
      this.pabellones = res;
    });
  }

  onCodigoChange(value: string) {
    this.id = value; // Actualizamos el valor de codigo con el nuevo valor ingresado
  }
  // VALIDACIÓN URL
  validateUrl() {
    if (this.ambiente.foto !== undefined) {
      const urlPattern = /^(http:\/\/|https:\/\/)/i;
      this.mostrarAlertaFoto = !urlPattern.test(this.ambiente.foto);
    } else {
      this.mostrarAlertaFoto = false; // No mostrar alerta si el campo está vacío o undefined
    }
  }

  // VALIDACION CONTACTO
  validateContacto() {
    const contactoPattern = /^[a-z0-9._%+-]+@usmp\.pe$/;
    this.mostrarAlertaContacto = !contactoPattern.test(this.ambiente.contacto || '');
  }



  //Contenido del menú lateral -->
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
