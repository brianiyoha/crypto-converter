import { NgModule } from '@angular/core';
import { btcComponent } from './btc/btc.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [btcComponent],
	imports: [IonicModule],
	exports: [btcComponent]
})
export class ComponentsModule {}
