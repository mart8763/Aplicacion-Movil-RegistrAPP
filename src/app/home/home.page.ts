import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

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

  // Para la animacion de carga
  spinner = false;

  constructor(private router: Router, private animationController: AnimationController) { }

  // Funcion para alternar la visibilidad de la contraseña
  togglePassword1Visibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  cambiarSpinner() {
    this.spinner = !this.spinner;
  }
  validar() {
    if (this.user.username.length != 0) {
      if (this.user.password.length != 0) {
        //this.mensaje = 'Conexion exitosa';
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.username,
            password: this.user.password,
          },
        };
        this.cambiarSpinner();
        /* setTimeout = permite generar un pequeño delay para realizar la accion */
        setTimeout(() => {

          this.router.navigate(['/perfil'], navigationExtras);
          this.cambiarSpinner();
          this.mensaje = "";
        }, 3000);
      } else {
        console.log('Contraseña vacia');
        this.mensaje = 'Contraseña vacia';
      }
    } else {
      console.log('Usuario vacio');
      this.mensaje = 'Usuario Vacio';
    }
  }

}

