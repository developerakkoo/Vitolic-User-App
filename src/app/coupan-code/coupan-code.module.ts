import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoupanCodePageRoutingModule } from './coupan-code-routing.module';

import { CoupanCodePage } from './coupan-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoupanCodePageRoutingModule
  ],
  declarations: [CoupanCodePage]
})
export class CoupanCodePageModule {}
