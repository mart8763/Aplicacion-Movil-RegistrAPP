import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGeneraPageRoutingModule } from './qr-genera-routing.module';

import { QrGeneraPage } from './qr-genera.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QrGeneraPageRoutingModule
  ],
  declarations: [QrGeneraPage]
})
export class QrGeneraPageModule { }
