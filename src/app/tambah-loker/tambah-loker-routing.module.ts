import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahLokerPage } from './tambah-loker.page';

const routes: Routes = [
  {
    path: '',
    component: TambahLokerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahLokerPageRoutingModule {}
