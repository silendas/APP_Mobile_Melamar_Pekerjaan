import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailGagalPageRoutingModule } from './detail-gagal-routing.module';

import { DetailGagalPage } from './detail-gagal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailGagalPageRoutingModule
  ],
  declarations: [DetailGagalPage]
})
export class DetailGagalPageModule {}
