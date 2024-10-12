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

  user = {
    username: '',
    password: '',
  };

  mostrarPassword: boolean = false;

  mensaje = '';
  mensajeTipo = ''; // Variable para el tipo de mensaje

  spinner = false;

  constructor(
    private router: Router, 
    private animationController: AnimationController,
    private auth: AuthenticatorService) { }

  togglePassword1Visibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  validar() {
    
      if (this.auth.login(this.user.username, this.user.password)) {
        this.mensaje = 'Conexión exitosa';
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
        this.mensaje = 'Error en las credenciales';
      }
  }

}
