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

  mostrarPassword: boolean = false;

  mensaje = '';
  mensajeTipo = ''; // Variable para el tipo de mensaje

  spinner = false;

  constructor(private router: Router, private animationController: AnimationController) { }

  togglePassword1Visibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  validar() {
    if (this.user.username.length != 0) {
      if (this.user.password.length != 0) {
        this.mensaje = 'Conexión exitosa';
        this.mensajeTipo = 'success'; // Mensaje de éxito
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.username,
            password: this.user.password,
          },
        };
        this.cambiarSpinner();
        setTimeout(() => {
          this.router.navigate(['/perfil'], navigationExtras);
          this.cambiarSpinner();
          this.mensaje = "";
          this.mensajeTipo = '';
        }, 3000);
      } else {
        this.mensaje = 'Contraseña vacía';
        this.mensajeTipo = 'error'; // Mensaje de error
      }
    } else {
      this.mensaje = 'Usuario vacío';
      this.mensajeTipo = 'error'; // Mensaje de error
    }
  }

}
