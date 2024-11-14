import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticatorService } from 'src/app/servicios/authenticator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    username: '',
    email: '',
    password: '',
  };

  constructor(
    private auth: AuthenticatorService,
    private router: Router, 
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async registrar() {
    this.auth.registrar(this.user).subscribe(
      async (res) => {
        // Navegar a la página de inicio si el registro fue exitoso
        this.router.navigate(['/home']);
        const toast = await this.toastController.create({
          message: 'Registrado con éxito',
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
      },
      async (error) => {
        // Mostrar mensaje de error si el registro falló
        const toast = await this.toastController.create({
          message: 'Error al registrar el usuario',
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
        console.error("Error en el proceso de registro:", error);
      }
    );
  }
}
