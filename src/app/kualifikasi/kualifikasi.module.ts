import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KualifikasiPageRoutingModule } from './kualifikasi-routing.module';

import { KualifikasiPage } from './kualifikasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KualifikasiPageRoutingModule
  ],
  declarations: [KualifikasiPage]
})
export class KualifikasiPageModule {}
