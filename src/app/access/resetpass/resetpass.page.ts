import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

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

  mostrarPassword1: boolean = false;
  mostrarPassword2: boolean = false;

  mensaje: string = '';

  constructor(
    private router: Router,
    private animationCtrl: AnimationController
  ) { 

    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: '';
      password1: '';
      password2: '';
    };
    

  }

  ngOnInit() {
  }

  togglePassword1Visibility() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }

  togglePassword2Visibility() {
    this.mostrarPassword2 = !this.mostrarPassword2;
  }

  async mostrarAlerta() {
    // Mostrar el contenedor de alerta personalizado
    const alertElement = document.getElementById('custom-alert');
    if (alertElement) {
      alertElement.classList.remove('hidden');
      alertElement.style.display = 'block'; // Asegúrate de que el contenedor se muestre

      // Aplicar animación al contenedor
      const animation = this.animationCtrl.create()
        .addElement(alertElement)
        .duration(500)
        .fromTo('transform', 'translateY(-100%)', 'translateY(0)')
        .fromTo('opacity', '0', '1');

      await animation.play();
    }
  }

  async closeCustomAlert() {
    const alertElement = document.getElementById('custom-alert');
    if (alertElement) {
      const animation = this.animationCtrl.create()
        .addElement(alertElement)
        .duration(300)
        .fromTo('transform', 'translateY(0)', 'translateY(-100%)')
        .fromTo('opacity', '1', '0');

      await animation.play();
      alertElement.style.display = 'none'; // Ocultar el contenedor después de la animación
    }
  }

  validar() {
    if (this.user.username.length !== 0) {
      if (this.user.password1.length !== 0) {
        if (this.user.password2.length !== 0) {
          if (this.user.password1 === this.user.password2) {
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
