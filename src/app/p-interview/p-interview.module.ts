import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PInterviewPageRoutingModule } from './p-interview-routing.module';

import { PInterviewPage } from './p-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PInterviewPageRoutingModule
  ],
  declarations: [PInterviewPage]
})
export class PInterviewPageModule {}
