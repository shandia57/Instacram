import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfDataPage } from './self-data.page';

const routes: Routes = [
  {
    path: '',
    component: SelfDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfDataPageRoutingModule {}
