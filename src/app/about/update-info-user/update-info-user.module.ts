import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateInfoUserPageRoutingModule } from './update-info-user-routing.module';

import { UpdateInfoUserPage } from './update-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateInfoUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateInfoUserPage]
})
export class UpdateInfoUserPageModule { }
