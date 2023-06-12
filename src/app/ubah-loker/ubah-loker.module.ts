import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahLokerPageRoutingModule } from './ubah-loker-routing.module';

import { UbahLokerPage } from './ubah-loker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahLokerPageRoutingModule
  ],
  declarations: [UbahLokerPage]
})
export class UbahLokerPageModule {}
