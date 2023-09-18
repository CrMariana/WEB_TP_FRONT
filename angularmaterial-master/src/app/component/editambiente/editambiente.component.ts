import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambiente } from 'src/app/model/Ambiente';
import { Area } from 'src/app/model/Area';
import { Pabellon } from 'src/app/model/Pabellon';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editambiente',
  templateUrl: './editambiente.component.html',
  styleUrls: ['./editambiente.component.css']
})
export class EditambienteComponent {
  ambiente: Ambiente = new Ambiente;
  areaJ: Area=new Area;
  pabellonJ: Pabellon=new Pabellon;
  areas: Area[]=[];
  pabellones: Pabellon[]=[];
  urlFoto: string = '';
  contacto: string = '';
  id?: string;
  editing:boolean=false;


  // Propiedades para mostrar alertas de error
  mostrarAlertaCodigo: boolean = false;
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
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Llama a los métodos GetArea y GetPabellon para cargar los datos en las listas correspondientes
    this.service.GetArea().subscribe(res => {
      this.areas = res;
    });

    this.service.GetPabellon().subscribe(res => {
      this.pabellones = res;
    });

    // Obtén el ID de ambiente de la URL y carga los datos del ambiente
    this.route.paramMap.subscribe((params: any) => {
      const parametro = {
        id: params.get("id")
      };
      this.service.BuscarAmbiente(parametro).subscribe(
        res =>{
          this.ambiente=res;
          if (this.ambiente && this.ambiente.area && this.ambiente.pabellon) {
            this.areaJ = this.ambiente.area;
            this.pabellonJ=this.ambiente.pabellon;
          }
        }
      )
      console.log(parametro);
    });
  }

  actualizarAmbiente() {
    // Validar los campos antes de actualizar
    if (
      !this.ambiente.id ||
      !this.ambiente.descripcion ||
      !this.ambiente.area ||
      !this.ambiente.pabellon ||
      !this.ambiente.piso ||
      !this.ambiente.foto ||
      !this.ambiente.contacto ||
      !this.ambiente.horario ||
      !this.ambiente.referencia
    ) {
      // Mostrar alertas para campos vacíos o inválidos
      this.mostrarAlertaCodigo = !this.ambiente.id;
      this.mostrarAlertaDescripcion = !this.ambiente.descripcion;
      this.mostrarAlertaArea = !this.ambiente.area;
      this.mostrarAlertaPabellon = !this.ambiente.pabellon;
      this.mostrarAlertaPiso = !this.ambiente.piso;
      this.mostrarAlertaFoto = !this.ambiente.foto;
      this.mostrarAlertaContacto = !this.ambiente.contacto;
      this.mostrarAlertaHorario = !this.ambiente.horario;
      this.mostrarAlertaReferencia = !this.ambiente.referencia;
      return;
    }

    // Si todos los campos están completos y válidos, procede a guardar los datos
    this.service.actualizarAmbiente(this.ambiente).subscribe(
      (response) => {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito.
        console.log('Ambiente actualizado con éxito', response);
        this.router.navigate(['/directorio']);
      },
      (error) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario.
        console.error('Error al actualizar el ambiente', error);
      }
    );
  }

  // Validación de ingreso de dato ID
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

  // VALIDACIÓN URL
  validateUrl() {
    if (this.ambiente.foto !== undefined) {
      const urlPattern = /^(http:\/\/|https:\/\/)/i;
      this.mostrarAlertaFoto = !urlPattern.test(this.ambiente.foto);
    } else {
      this.mostrarAlertaFoto = false; // No mostrar alerta si el campo está vacío o undefined
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

cerrarSesion(){
  this.service.deleteToken();
  this.router.navigate(['']);
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
