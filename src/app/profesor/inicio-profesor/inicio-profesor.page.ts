import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AuthenticatorService } from 'src/app/servicios/authenticator.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage {

  profesor = {
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
    private auth: AuthenticatorService,
    private storage: StorageService
  ) { }

  togglePassword1Visibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }


  async ngOnInit() {
    const test = this.storage.get('ejemplo.eje');
    test.then((val) => {
      console.log(val);
    });
  }

  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  validar() {
    this.auth.loginProfesor(this.profesor.username, this.profesor.password).subscribe(
      (res) => {
        console.log("Respuesta de loginProfesor:", res);
        if (res) {
          this.mensaje = 'Conexión exitosa';

          // Establecer connnectionStatus en true al autenticarse
          this.auth.connnectionStatus = true;

          let navigationExtras: NavigationExtras = {
            state: {
              username: this.profesor.username,
              password: this.profesor.password,
            },
          };

          console.log("Redirigiendo a perfil...");
          this.router.navigate(['/perfil-profesor'], navigationExtras);
        } else {
          this.mensaje = 'Error en las credenciales';
          console.log("Usuario no encontrado o credenciales incorrectas.");
        }
      },
      (error) => {
        this.mensaje = 'Error en las credenciales';
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
