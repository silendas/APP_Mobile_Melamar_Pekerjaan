import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LokerPageRoutingModule } from './loker-routing.module';

import { LokerPage } from './loker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LokerPageRoutingModule
  ],
  declarations: [LokerPage]
})
export class LokerPageModule {}
