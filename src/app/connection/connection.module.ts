import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConnectionPageRoutingModule } from './connection-routing.module';
import { ConnectionPage } from './connection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConnectionPage]
})
export class ConnectionPageModule { }
