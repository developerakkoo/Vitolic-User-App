import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoupanCodePage } from './coupan-code.page';

const routes: Routes = [
  {
    path: '',
    component: CoupanCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoupanCodePageRoutingModule {}
