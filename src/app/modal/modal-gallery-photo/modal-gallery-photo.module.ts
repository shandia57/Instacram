import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGalleryPhotoPageRoutingModule } from './modal-gallery-photo-routing.module';

import { ModalGalleryPhotoPage } from './modal-gallery-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGalleryPhotoPageRoutingModule
  ],
  declarations: [ModalGalleryPhotoPage]
})
export class ModalGalleryPhotoPageModule {}
