import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PLolosPage } from './p-lolos.page';

const routes: Routes = [
  {
    path: '',
    component: PLolosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PLolosPageRoutingModule {}
