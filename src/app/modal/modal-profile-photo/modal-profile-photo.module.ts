import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalProfilePhotoPageRoutingModule } from './modal-profile-photo-routing.module';

import { ModalProfilePhotoPage } from './modal-profile-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProfilePhotoPageRoutingModule
  ],
  declarations: [ModalProfilePhotoPage]
})
export class ModalProfilePhotoPageModule {}
