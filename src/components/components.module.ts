import { NgModule } from '@angular/core';
import { btcComponent } from './btc/btc.component';
import { IonicModule } from 'ionic-angular';
import { EtherumComponent } from './etherum/etherum.component';
@NgModule({
	declarations: [btcComponent,
    EtherumComponent],
	imports: [IonicModule],
	exports: [btcComponent,
    EtherumComponent]
})
export class ComponentsModule {}
