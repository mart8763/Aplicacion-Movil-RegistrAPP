import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    nombre: '',
    apellidos: '',
    edad: '',
    educacion: '',
    fechaNacimiento: '' // Aquí se almacenará la fecha seleccionada
  };

  constructor(private router: Router, private alertController: AlertController) {}

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  registrar() {
    if (!this.user.nombre || !this.user.apellidos || !this.user.edad || !this.user.educacion || !this.user.fechaNacimiento) {
      this.mostrarAlerta('Por favor, complete todos los campos.');
    } else {
      // Guardar los datos del usuario en localStorage
      localStorage.setItem('user', JSON.stringify(this.user));

      // Navegar a la página de perfil con los datos
      const navigationExtras: NavigationExtras = {
        state: {
          username: this.user.nombre + ' ' + this.user.apellidos,
          edad: this.user.edad,
          educacion: this.user.educacion,
          fechaNacimiento: this.user.fechaNacimiento
        }
      };
      this.router.navigate(['/perfil'], navigationExtras);
    }
  }


  ngOnInit() {
  }

}


