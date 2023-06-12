import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelamarPageRoutingModule } from './pelamar-routing.module';

import { PelamarPage } from './pelamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelamarPageRoutingModule
  ],
  declarations: [PelamarPage]
})
export class PelamarPageModule {}
