import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahTestPageRoutingModule } from './ubah-test-routing.module';

import { UbahTestPage } from './ubah-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahTestPageRoutingModule
  ],
  declarations: [UbahTestPage]
})
export class UbahTestPageModule {}
