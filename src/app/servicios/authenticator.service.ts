import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  //Generamos una variable boolean para rectificar el actual estado de conexion con el autentificador
  connnectionStatus: boolean = false;

  constructor() { }

  login(user: String, pass: String): boolean {
    if (user == 'aa' && pass == 'aa') {
      this.connnectionStatus = true;
      return true;
    }
    this.connnectionStatus = false;
    return false;
  }

  //Logout para desconectar del sistema
  logout() {
    this.connnectionStatus = false;
  }
  //Funcion para consultar el estado de conexion
  isConected() {
    return this.connnectionStatus;
  }
}
