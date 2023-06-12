import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahLokerPageRoutingModule } from './tambah-loker-routing.module';

import { TambahLokerPage } from './tambah-loker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahLokerPageRoutingModule
  ],
  declarations: [TambahLokerPage]
})
export class TambahLokerPageModule {}
