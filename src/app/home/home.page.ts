import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AuthenticatorService } from '../servicios/authenticator.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /* Objeto JSON para usuario */
  user = {
    username: '',
    password: '',
  };

  mostrarPassword: boolean = false;

  /* mensaje de respuesta */
  mensaje = '';

  spinner = false;

  constructor(
    private router: Router, 
    private animationController: AnimationController,
    private auth: AuthenticatorService
  ) { }

  togglePassword1Visibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }


  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  validar() {
    this.auth
      .loginBDD(this.user.username, this.user.password)
      .then((res) => {
        this.mensaje = 'Conexion exitosa';
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
          this.mensaje = '';
        }, 3000);
      })
      .catch((error) => {
        this.mensaje = 'Error en las credenciales';
      });
  }

}
