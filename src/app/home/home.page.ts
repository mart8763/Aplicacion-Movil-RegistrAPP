import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    username: '',
    password: '',
  };

  // Variable para controlar la visibilidad de la contraseña
  mostrarPassword: boolean = false;
  
  mensaje = '';

  constructor(private router: Router) {}

  // Funcion para alternar la visibilidad de la contraseña
  togglePassword1Visibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  validar() {
    if (this.user.username.length != 0) {
      if (this.user.password.length != 0) {
        //Funciona
        this.mensaje = 'Conexion exitosa';
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.username,
            password: this.user.password,
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

