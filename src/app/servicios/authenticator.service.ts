import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  connnectionStatus: boolean = false;
  apiURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  // Registrar usuario en la API
  registrar(user: any): Observable<any> {
    return this.http.post(`${this.apiURL}/users`, user);
  }

  // Obtener todos los usuarios y filtrar manualmente en el frontend
  loginBDD(user: string, pass: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiURL}/users`).pipe(
      map(users => {
        const foundUser = users.find(u => u.username === user && u.password === pass);
        console.log("Usuarios recuperados:", users); // Log para ver todos los usuarios
        console.log("Usuario encontrado:", foundUser); // Log para ver si se encuentra el usuario
        return foundUser;
      })
    );
  }

  loginProfesor(user: string, pass: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiURL}/profesor`).pipe(
      map(profesor => {
        const foundUser = profesor.find(u => u.username === user && u.password === pass);
        console.log("Usuarios recuperados:", profesor); // Log para ver todos los usuarios
        console.log("Usuario encontrado:", foundUser); // Log para ver si se encuentra el usuario
        return foundUser;
      })
    );
  }

  // Método de autenticación de prueba
  login(user: string, pass: string): boolean {
    if (user === 'j.c' && pass === 'a123') {
      this.connnectionStatus = true;
      return true;
    }
    this.connnectionStatus = false;
    return false;
  }

  // Logout para desconectar del sistema
  logout() {
    this.connnectionStatus = false;
  }

  // Función para consultar el estado de conexión
  isConected() {
    return this.connnectionStatus;
  }
}
