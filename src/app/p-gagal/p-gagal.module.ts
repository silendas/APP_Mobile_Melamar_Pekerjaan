import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PGagalPageRoutingModule } from './p-gagal-routing.module';

import { PGagalPage } from './p-gagal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PGagalPageRoutingModule
  ],
  declarations: [PGagalPage]
})
export class PGagalPageModule {}
