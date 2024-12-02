import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';

@Component({
  selector: 'app-qr-genera',
  templateUrl: './qr-genera.page.html',
  styleUrls: ['./qr-genera.page.scss'],
})
export class QrGeneraPage implements OnInit {

  qrData: string = ''; // Variable para los datos del QR
  apiURL = "http://localhost:3000"
  attendances: any[] = []; // Lista de asistencias

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadAttendances(); // Cargar las asistencias al iniciar
  }

  generateQR() {
    this.qrData = 'Asistencia-ID123'; // Aquí puedes usar datos dinámicos, como IDs o tokens
  }

  loadAttendances() {

    this.http.get<any[]>(this.apiURL).subscribe({
      next: (response) => {
        this.attendances = response; // Asegúrate de que contiene los `id`
        console.log('Asistencias cargadas:', this.attendances);
      },
      error: (error) => {
        console.error('Error al cargar asistencias:', error);
        this.attendances = []; // Vaciar la lista local en caso de error
      },
    });
  }
}
