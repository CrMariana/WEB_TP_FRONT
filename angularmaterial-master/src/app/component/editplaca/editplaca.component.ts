import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pabellon } from 'src/app/model/Pabellon';
import { Placa } from 'src/app/model/Placa';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editplaca',
  templateUrl: './editplaca.component.html',
  styleUrls: ['./editplaca.component.css']
})
export class EditplacaComponent implements OnInit {
  placas: Placa = {}; // Inicializar como un objeto vacío
  pabellonJ: Pabellon = new Pabellon();
  pabellones: Pabellon[] = [];
  urlFoto: string = '';
  id!: string; // Utilizar el operador ! para indicar que id no será null o undefined
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener la lista de pabellones
    this.service.GetPabellon().subscribe((res: Pabellon[]) => {
      this.pabellones = res;
    });

    // Obtener el ID de la placa desde los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || ''; // Inicializar id con una cadena vacía si params.get('id') es null o undefined

      // Si hay un ID válido, buscar la placa correspondiente
      if (this.id) {
        this.service.BuscarPlaca({ id: this.id }).subscribe((res: Placa) => {
          this.placas = res;
          if (this.placas && this.placas.pabellon) {
            this.pabellonJ = this.placas.pabellon;
          }
        });
      }
    });
  }

  // Validar la URL de la foto (puedes implementar tu propia lógica aquí)
  validateUrl() {
  }

  // Guardar los cambios en la placa
  actualizarPlaca() {
    // Verificar si algún campo obligatorio está vacío
    if (
      !this.placas.id?.trim() ||
      !this.pabellonJ.id ||
      !this.placas.piso?.trim() ||
      !this.placas.foto?.trim()
    ) {
      // Mostrar una alerta de campos vacíos
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    // Crear un objeto Placa con los datos del formulario
    const placaActualizada: Placa = {
      id: this.placas.id,
      pabellon: this.pabellonJ,
      piso: this.placas.piso,
      foto: this.placas.foto,
      // Agregar otros campos de Placa si es necesario
    };
  
    // Llamar al servicio para actualizar la placa
    this.service.actualizarPlaca(placaActualizada).subscribe(
      (response) => {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito.
        console.log('Placa actualizada con éxito', response);
        this.router.navigate(['/placa']);
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al actualizar la placa', error);
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
