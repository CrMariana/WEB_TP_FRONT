import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  mostrarMenubar = false;
  constructor(private router: Router) {
  }

  iniciosesion(){
    this.router.navigate(['/visitante']);
  }
}
