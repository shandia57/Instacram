import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapSubPageRoutingModule } from './recap-sub-routing.module';

import { RecapSubPage } from './recap-sub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapSubPageRoutingModule
  ],
  declarations: [RecapSubPage]
})
export class RecapSubPageModule {}
