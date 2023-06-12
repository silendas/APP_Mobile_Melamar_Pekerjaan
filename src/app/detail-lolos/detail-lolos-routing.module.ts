import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailLolosPage } from './detail-lolos.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLolosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailLolosPageRoutingModule {}
