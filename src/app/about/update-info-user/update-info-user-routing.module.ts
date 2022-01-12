import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateInfoUserPage } from './update-info-user.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateInfoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateInfoUserPageRoutingModule {}
