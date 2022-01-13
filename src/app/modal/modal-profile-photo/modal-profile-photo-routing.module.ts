import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalProfilePhotoPage } from './modal-profile-photo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalProfilePhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalProfilePhotoPageRoutingModule {}
