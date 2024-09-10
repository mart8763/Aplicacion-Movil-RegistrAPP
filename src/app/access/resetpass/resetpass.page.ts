import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  user = {
    password1: '',
    password2: '',
  };
  
  mensaje = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validar() {
    // Verificamos que la primera contraseña no esté vacía
    if (this.user.password1.length != 0) {
      // Verificamos que la segunda contraseña no esté vacía
      if (this.user.password2.length != 0) {
        // Verificamos que las contraseñas coincidan
        if (this.user.password1 === this.user.password2) {
          // Si todo está correcto, mostramos el mensaje de éxito
          this.mensaje = 'Conexión exitosa';
          let navigationExtras: NavigationExtras = {
            state: {
              password: this.user.password1,
            },
          };

          this.router.navigate(['/home'], navigationExtras);
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
  }
}


