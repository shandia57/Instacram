import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelfDataPageRoutingModule } from './self-data-routing.module';
import { SelfDataPage } from './self-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfDataPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SelfDataPage]
})
export class SelfDataPageModule { }
