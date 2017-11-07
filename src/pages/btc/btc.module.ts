import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BtcPage } from './btc';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    BtcPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BtcPage),
  ],
})
export class BtcPageModule {}
