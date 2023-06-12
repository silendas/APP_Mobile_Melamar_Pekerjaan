import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbahTestPage } from './ubah-test.page';

const routes: Routes = [
  {
    path: '',
    component: UbahTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbahTestPageRoutingModule {}
