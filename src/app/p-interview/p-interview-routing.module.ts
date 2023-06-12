import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PInterviewPage } from './p-interview.page';

const routes: Routes = [
  {
    path: '',
    component: PInterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PInterviewPageRoutingModule {}
