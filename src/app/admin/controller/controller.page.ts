import { Component, OnInit } from '@angular/core';
import { ApicontrollerService } from 'src/app/servicios/apicontroller.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@capacitor/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  styleUrls: ['./controller.page.scss'],
})
export class ControllerPage implements OnInit {

  users: any[] = [];
  userForm: any = {};         // Formulario de usuario para agregar o modificar
  isEditing: boolean = false; // Variable para indicar si se está editando

  constructor(private api: ApicontrollerService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.api.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log("Usuarios cargados:", this.users);
        console.log(this.users)
      },
      (error) => {
        console.log("Error en la llamada :" + error)
      });
  }

  addUser() {
    console.log("Datos del formulario:", this.userForm); // Verificar datos del formulario

    if (!this.userForm.username || !this.userForm.email || !this.userForm.password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    this.api.postUser(this.userForm).subscribe(() => {
      console.log('Usuario agregado con éxito');
      this.userForm = { username: '', email: '', password: '' };  // Limpiar el formulario
      this.cargarUsuarios();    // Recargar la lista de usuarios
    }, (error) => {
      console.error('Error al agregar el usuario:', error);
    });
  }

  // Preparar los datos para editar un usuario
  editUser(user: any) {
    this.userForm = { ...user };  // Copiar los datos del usuario al formulario, incluyendo el ID
    this.isEditing = true;
  }  

  // Método para buscar y modificar el usuario usando username y password
  modificarUsuario() {
    if (!this.userForm.username || !this.userForm.email) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    if (this.userForm.id) {  // Usamos el ID ya almacenado en el formulario
      console.log('ID del usuario:', this.userForm.id);
      console.log('Datos para actualizar:', this.userForm);
  
      this.api.updateUser(this.userForm.id, this.userForm).subscribe(() => {
        console.log('Usuario actualizado con éxito');
        this.userForm = {};
        this.isEditing = false;
        this.cargarUsuarios();
      }, (error) => {
        console.error('Error al actualizar el usuario:', error);
      });
    } else {
      alert("No se encontró el ID del usuario para modificar.");
    }
  }
  

  cancelEdit() {
    this.userForm = {};
    this.isEditing = false;
  }

  eliminarUsuario(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.api.deleteUser(id).subscribe(() => {
        console.log('Usuario eliminado con éxito');
        this.cargarUsuarios();  // Vuelve a cargar la lista de usuarios después de eliminar
      }, (error) => {
        console.error('Error al eliminar el usuario:', error);
      });
    }
  }
}
