import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrGeneraPage } from './qr-genera.page';

const routes: Routes = [
  {
    path: '',
    component: QrGeneraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrGeneraPageRoutingModule {}
