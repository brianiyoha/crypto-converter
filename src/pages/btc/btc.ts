import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-btc',
  templateUrl: 'btc.html',
})
export class BtcPage {

  selected:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.selected = navParams.get('selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BtcPage');
  }

}
