import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahTestPageRoutingModule } from './tambah-test-routing.module';

import { TambahTestPage } from './tambah-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahTestPageRoutingModule
  ],
  declarations: [TambahTestPage]
})
export class TambahTestPageModule {}
