import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PGagalPage } from './p-gagal.page';

const routes: Routes = [
  {
    path: '',
    component: PGagalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PGagalPageRoutingModule {}
