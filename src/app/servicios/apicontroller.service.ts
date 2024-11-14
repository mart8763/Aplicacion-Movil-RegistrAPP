import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicontrollerService {

  apiURL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + "/users");
  }
  postUser(data: any): Observable<any> {
    return this.http.post(this.apiURL + "/users", data);
  }
  updateUser(id: string, userdata: any): Observable<any> {
    return this.http.put(this.apiURL + "/users/" + id, userdata);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.apiURL + "/users/" + id);
  }

  // Método para obtener un usuario por username y password
  getUserByCredentials(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiURL}/users`, {
      params: {
        username: username,
        password: password
      }
    }).pipe(
      map(users => users.length > 0 ? users[0] : null) // Devuelve el primer usuario o null si no hay coincidencias
    );
  }
}
