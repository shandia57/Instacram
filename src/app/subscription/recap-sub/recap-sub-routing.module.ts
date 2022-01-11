import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapSubPage } from './recap-sub.page';

const routes: Routes = [
  {
    path: '',
    component: RecapSubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapSubPageRoutingModule {}
