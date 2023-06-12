import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KualifikasiPage } from './kualifikasi.page';

const routes: Routes = [
  {
    path: '',
    component: KualifikasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KualifikasiPageRoutingModule {}
