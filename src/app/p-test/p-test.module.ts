import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PTestPageRoutingModule } from './p-test-routing.module';

import { PTestPage } from './p-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PTestPageRoutingModule
  ],
  declarations: [PTestPage]
})
export class PTestPageModule {}
