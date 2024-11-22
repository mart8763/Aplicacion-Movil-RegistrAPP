import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/servicios/authenticator.service';

@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.page.html',
  styleUrls: ['./perfil-profesor.page.scss'],
})
export class PerfilProfesorPage implements OnInit {

  username = '';

  constructor(private router: Router, private auth: AuthenticatorService) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: '';
      password: '';
    };
    this.username = state.username;
    //Console.log
    //Mensaje bienvenida
  }
  logout() {
    this.auth.logout()
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
