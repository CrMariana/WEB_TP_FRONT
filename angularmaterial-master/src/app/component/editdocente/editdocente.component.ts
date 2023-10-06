import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from 'src/app/model/Docente';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editdocente',
  templateUrl: './editdocente.component.html',
  styleUrls: ['./editdocente.component.css']
})
export class EditdocenteComponent {
  docentes: Docente = {};
  nombres: string = '';
  apePaterno: string = '';
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    // Obtener el ID de la placa desde los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || ''; // Inicializar id con una cadena vacía si params.get('id') es null o undefined
  
      // Si hay un ID válido, buscar el docente correspondiente
      if (this.id) {
        this.service.BuscarDocente({ id: this.id }).subscribe((res: Docente) => {
          this.docentes = res; // Usar una variable docente en lugar de docentes si solo esperas un docente
          if (this.docentes && this.docentes.nombres) {
            // Aquí puedes realizar acciones adicionales con el docente encontrado
          }
        });
      }
    });
  }
  
  // Guardar los cambios en la placa
  actualizarDocente() {
    // Verificar si algún campo obligatorio está vacío
    if (
      !this.docentes.id?.trim() ||
      !this.docentes.id ||
      !this.docentes.nombres?.trim() ||
      !this.docentes.apePaterno?.trim()
    ) {
      // Mostrar una alerta de campos vacíos
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    // Crear un objeto Docente con los datos del formulario
    const docenteActualizado: Docente = {
      id: this.docentes.id,
      nombres: this.docentes.nombres,
      apePaterno: this.docentes.apePaterno,
    };
  
    // Llamar al servicio para actualizar la placa
    this.service.actualizarDocente(docenteActualizado).subscribe(
      (response) => {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito.
        console.log('Actualizada con éxito', response);
        this.router.navigate(['/docente']);
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al actualizar', error);
      }
    );
  }

  // Métodos de navegación
  cerrarSesion() {
    this.service.deleteToken();
    this.router.navigate(['']);
  }

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
