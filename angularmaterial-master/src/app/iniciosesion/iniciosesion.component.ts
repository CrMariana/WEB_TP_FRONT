import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../service/master.service';
import { Administrador } from '../model/Administrador';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  mostrarMenubar = false;
  administrador: Administrador = new Administrador();
  mostrarErrorCamposVacios = false;
  mostrarErrorUsuarioContrasenaIncorrecta = false;

  constructor(private router: Router, private service: MasterService) {}

  ngOnInit(): void {
    this.administrador = new Administrador();
  }

  iniciosesion() {
    // Inicializa las variables de error en falso al hacer clic en iniciar sesión
    this.mostrarErrorCamposVacios = false;
    this.mostrarErrorUsuarioContrasenaIncorrecta = false;

    // Valida si los campos están vacíos
    if (!this.administrador.username || !this.administrador.password) {
      this.mostrarErrorCamposVacios = true;
      return;
    }

    // Si los campos no están vacíos, realiza la solicitud al servicio
    this.service.Ingresar(this.administrador).subscribe(
      (res: any) => {
        if (res.Error == null) {
          this.service.setToken(res.IdToken);
          console.log(res);
          this.router.navigate(['/directorio']);
        } else {
          // Verifica si la respuesta contiene el mensaje "Usuario o contraseña incorrecta"
          if (res.Error === 'Usuario o contraseña incorrecta') {
            this.mostrarErrorUsuarioContrasenaIncorrecta = true;
          } else {
            console.log(res);
            // Otros errores
          }
        }
      },
      (error) => {
        console.log(error); // Manejar errores de conexión u otros errores aquí
      }
    );
  }
}
