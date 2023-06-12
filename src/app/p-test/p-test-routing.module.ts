import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PTestPage } from './p-test.page';

const routes: Routes = [
  {
    path: '',
    component: PTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PTestPageRoutingModule {}
