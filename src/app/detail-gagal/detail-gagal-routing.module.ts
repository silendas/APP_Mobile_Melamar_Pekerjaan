import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailGagalPage } from './detail-gagal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailGagalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailGagalPageRoutingModule {}
