import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  user = {
    password1: '',
    password2: '',
  };
  
  mensaje = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validar() {
    if (this.user.password1.length != 0) {
      if (this.user.password2.length != 0) {
        //Funciona
        this.mensaje = 'Conexion exitosa';
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.password1,
            password: this.user.password2,
          },
        };

        this.router.navigate(['/perfil'], navigationExtras);
        
        } else {
          console.log('Contraseña vacia');
          this.mensaje = 'Contraseña vacia';
          //No funciona
        }
      } else {
        console.log('Usuario vacio');
        this.mensaje = 'Usuario Vacio';
        //Tampoco funciona
      }
  }

}
