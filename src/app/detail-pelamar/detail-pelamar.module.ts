import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPelamarPageRoutingModule } from './detail-pelamar-routing.module';

import { DetailPelamarPage } from './detail-pelamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPelamarPageRoutingModule
  ],
  declarations: [DetailPelamarPage]
})
export class DetailPelamarPageModule {}
