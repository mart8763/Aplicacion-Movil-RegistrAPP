import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage implements OnInit {

  mostrarPassword: boolean = false;

  spinner = false;

  constructor(
    private router: Router,
    private animationController: AnimationController,
  ) { }

  togglePassword1Visibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }


  ngOnInit() {
  }

}
