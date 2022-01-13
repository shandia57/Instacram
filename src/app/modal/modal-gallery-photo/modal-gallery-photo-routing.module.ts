import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGalleryPhotoPage } from './modal-gallery-photo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGalleryPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGalleryPhotoPageRoutingModule {}
