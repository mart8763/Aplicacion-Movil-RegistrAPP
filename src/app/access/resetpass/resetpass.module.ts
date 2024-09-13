import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpassPageRoutingModule } from './resetpass-routing.module';

import { ResetpassPage } from './resetpass.page';

import { MatProgressSpinner } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpassPageRoutingModule,
    MatProgressSpinner,
  ],
  declarations: [ResetpassPage]
})
export class ResetpassPageModule {}
