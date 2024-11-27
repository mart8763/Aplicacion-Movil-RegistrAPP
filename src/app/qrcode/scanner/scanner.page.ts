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
    this.loadAttendances(); // Cargar las asistencias al iniciar
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
    const apiUrl = 'http://localhost:3000/attendances'; // Ruta correcta para registrar asistencias

    // Obtén los datos del usuario que escaneó el QR
    const student = JSON.parse(localStorage.getItem('loggedInStudent') || '{}');

    // Verificar si el usuario ya registró asistencia en el backend
    const payload = { username: student.username };

    this.http.get<any[]>(apiUrl).subscribe({
      next: (attendances) => {
        const alreadyExists = attendances.some((attendance) => attendance.username === student.username);

        if (alreadyExists) {
          alert('Este usuario ya registró asistencia.');
          return;
        }

        // Si no existe, registrar asistencia
        this.http.post(apiUrl, payload).subscribe({
          next: (response) => {
            console.log('Asistencia registrada:', response);
            this.attendances.push(payload); // Actualiza la lista local
            alert('¡Asistencia registrada correctamente!');
          },
          error: (error) => {
            console.error('Error al registrar asistencia:', error);
            alert('Hubo un problema al registrar la asistencia.');
          },
        });
      },
      error: (error) => {
        console.error('Error al verificar asistencias:', error);
      },
    });
  }

  loadAttendances() {
    const apiUrl = 'http://localhost:3000/attendances'; // Ruta correcta para obtener asistencias

    this.http.get<any[]>(apiUrl).subscribe({
      next: (response) => {
        this.attendances = response; // Actualiza la lista con las asistencias
        console.log('Asistencias cargadas:', this.attendances);
      },
      error: (error) => {
        console.error('Error al cargar asistencias:', error);
        this.attendances = []; // Asegúrate de que esté vacía si hay un error
      },
    });
  }


}
