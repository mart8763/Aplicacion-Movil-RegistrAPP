import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-genera',
  templateUrl: './qr-genera.page.html',
  styleUrls: ['./qr-genera.page.scss'],
})
export class QrGeneraPage implements OnInit {

  qrData: string = ''; // Variable para los datos del QR

  constructor() { }

  ngOnInit() {
  }

  generateQR() {
    this.qrData = 'Asistencia-ID123'; // Aquí puedes usar datos dinámicos, como IDs o tokens
  }

}
