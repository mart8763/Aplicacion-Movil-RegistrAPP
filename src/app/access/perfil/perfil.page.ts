import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthenticatorService } from './../../Servicios/authenticator.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username = '';
  //private auth: AuthenticatorService arreglarlo
  constructor(private router: Router,) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: '';
      password: '';
    };
    this.username = state.username;
    //Console.log
    //Mensaje bienvenida
  }
  ngOnInit() {
  }

}

