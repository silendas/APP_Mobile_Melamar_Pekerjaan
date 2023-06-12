import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLolosPageRoutingModule } from './detail-lolos-routing.module';

import { DetailLolosPage } from './detail-lolos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailLolosPageRoutingModule
  ],
  declarations: [DetailLolosPage]
})
export class DetailLolosPageModule {}
