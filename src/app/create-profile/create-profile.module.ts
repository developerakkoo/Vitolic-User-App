import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { IonicModule } from '@ionic/angular';

import { CreateProfilePageRoutingModule } from './create-profile-routing.module';

import { CreateProfilePage } from './create-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    IonicModule,
    CreateProfilePageRoutingModule
  ],
  declarations: [CreateProfilePage]
})
export class CreateProfilePageModule {}
