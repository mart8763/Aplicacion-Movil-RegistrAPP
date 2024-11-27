import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>; // Referencia al elemento de video
  qrResult: string = ''; // Resultado del escaneo
  scanning: boolean = false; // Controla si el escáner está activo
  private controls: IScannerControls | null = null; // Controla el lector
  attendances: any[] = []; // Lista de asistencias

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // Iniciar el escáner
  async startScanner() {
    this.scanning = true;

    try {
      const codeReader = new BrowserMultiFormatReader();
      const devices = await BrowserMultiFormatReader.listVideoInputDevices();

      if (devices.length > 0) {
        const selectedDeviceId = devices[0].deviceId; // Usa la primera cámara disponible

        // Inicia el escaneo con la cámara
        this.controls = await codeReader.decodeFromVideoDevice(
          selectedDeviceId,
          this.videoElement.nativeElement,
          (result, error) => {
            if (result) {
              this.qrResult = result.getText(); // Guarda el resultado
              this.stopScanner(); // Detiene el escaneo
              this.registerAttendance(); // Registra la asistencia
            }
            if (error) {
              console.error('Error de escaneo:', error);
            }
          }
        );
      } else {
        console.error('No se encontraron cámaras disponibles');
        this.scanning = false;
      }
    } catch (error) {
      console.error('Error al iniciar el escáner:', error);
      this.scanning = false;
    }
  }

  // Detener el escáner
  stopScanner() {
    if (this.controls) {
      this.controls.stop(); // Detiene el lector y libera la cámara
      this.controls = null;
    }
    this.scanning = false;
  }

  // Registrar asistencia en la API
  registerAttendance() {
    const apiUrl = 'http://localhost:3000/attendances'; // Ruta para registrar asistencias

    // Obtener los datos del usuario logueado desde localStorage
    const student = JSON.parse(localStorage.getItem('loggedInStudent') || '{}');

    // Crear el payload para registrar asistencia
    const payload = {
      id: student.username, // Usamos el username como identificador temporal
      username: student.username
    };

    // Registrar la asistencia directamente sin verificar duplicados
    this.http.post(apiUrl, payload).subscribe({
      next: (response) => {
        console.log('Asistencia registrada:', response);

        // Actualizar la lista local de asistencias para mostrarla en la tabla
        this.attendances.push(payload);

        alert('¡Asistencia registrada correctamente!');
      },
      error: (error) => {
        console.error('Error al registrar asistencia:', error);
        alert('Hubo un problema al registrar la asistencia.');
      },
    });
  }


}
