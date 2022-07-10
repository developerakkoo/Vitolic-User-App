import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicModule } from '@ionic/angular';
import { QrCodeModule } from 'ng-qrcode';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QrCodeModule ,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage],
  // providers: [{BarcodeScanner}],
})
export class SettingsPageModule {}
