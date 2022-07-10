import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PincodePageRoutingModule } from './pincode-routing.module';

import { PincodePage } from './pincode.page';
import { ReactiveFormsModule} from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    PincodePageRoutingModule
  ],
  declarations: [PincodePage]
})
export class PincodePageModule {}
