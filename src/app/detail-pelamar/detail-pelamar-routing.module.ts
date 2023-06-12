import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPelamarPage } from './detail-pelamar.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPelamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPelamarPageRoutingModule {}
