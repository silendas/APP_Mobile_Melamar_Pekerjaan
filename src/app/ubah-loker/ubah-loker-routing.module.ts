import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbahLokerPage } from './ubah-loker.page';

const routes: Routes = [
  {
    path: '',
    component: UbahLokerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbahLokerPageRoutingModule {}
