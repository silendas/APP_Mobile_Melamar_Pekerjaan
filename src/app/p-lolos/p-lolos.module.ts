import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PLolosPageRoutingModule } from './p-lolos-routing.module';

import { PLolosPage } from './p-lolos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PLolosPageRoutingModule
  ],
  declarations: [PLolosPage]
})
export class PLolosPageModule {}
