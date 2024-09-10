import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  user = {
    username: '',
    password1: '',
    password2: '',
  };

  // Variables para controlar la visibilidad de las contraseñas
  mostrarPassword1: boolean = false;
  mostrarPassword2: boolean = false;
  
  mensaje = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  // Funciones para alternar la visibilidad de las contraseñas
  togglePassword1Visibility() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }

  togglePassword2Visibility() {
    this.mostrarPassword2 = !this.mostrarPassword2;
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'La contraseña ha sido cambiada exitosamente.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Aquí se realiza la redirección después de cerrar el mensaje
            let navigationExtras: NavigationExtras = {
              state: {
                password: this.user.password1,
              },
            };
            this.router.navigate(['/home'], navigationExtras);
          }
        }
      ]
    });
  
    await alert.present();
  }
  

  validar() {
    // Verificar que el nombre de usuario no esté vacío
    if (this.user.username.length != 0) {
      // Verificamos que la primera contraseña no esté vacía
      if (this.user.password1.length != 0) {
        // Verificamos que la segunda contraseña no esté vacía
        if (this.user.password2.length != 0) {
          // Verificamos que las contraseñas coincidan
          if (this.user.password1 === this.user.password2) {
            // Si todo está correcto, mostramos el mensaje de éxito
            //this.mensaje = 'Conexión exitosa';
            let navigationExtras: NavigationExtras = {
              state: {
                password: this.user.password1,
              },
            };

            this.mostrarAlerta();
          } else {
            console.log('Las contraseñas no coinciden');
            this.mensaje = 'Las contraseñas no coinciden';
          }
        } else {
          console.log('Confirmación de contraseña vacía');
          this.mensaje = 'Confirmación de contraseña vacía';
        }
      } else {
        console.log('Contraseña vacía');
        this.mensaje = 'Contraseña vacía';
      } 
    } else {
      console.log('Usuario vacío');
      this.mensaje = 'Usuario vacío';
    }
  }
}
