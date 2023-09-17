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
  constructor(private router: Router,private service: MasterService) {}

  ngOnInit(): void {
    this.administrador=new Administrador();
  }

  iniciosesion(){
    this.service.Ingresar(this.administrador).subscribe(
      (res: any) =>{
        if(res.Error==null){
          this.service.setToken(res.IdToken)
          console.log(res);
          this.router.navigate(['/directorio']);
        }else{
          console.log(res)
        }
      }
    );
  }
}