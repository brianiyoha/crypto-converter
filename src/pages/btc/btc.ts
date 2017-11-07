import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CryptoInfoProvider } from '../../providers/crypto-info/crypto-info';



@IonicPage()
@Component({
  selector: 'page-btc',
  templateUrl: 'btc.html',
})
export class BtcPage {

  
  constructor(private crypto:CryptoInfoProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BtcPage');
  }

}
