import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahTestPage } from './tambah-test.page';

const routes: Routes = [
  {
    path: '',
    component: TambahTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahTestPageRoutingModule {}
