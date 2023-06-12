import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LokerPage } from './loker.page';

const routes: Routes = [
  {
    path: '',
    component: LokerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LokerPageRoutingModule {}
