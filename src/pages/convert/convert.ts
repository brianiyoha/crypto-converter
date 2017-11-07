import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConvertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convert',
  templateUrl: 'convert.html',
})
export class ConvertPage {

  amount:number;
  type:string;
  rate:number =0;
  total:number;
  convertionType:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.type = this.navParams.get("type");
  this.rate = this.navParams.get("price");
  if(this.type){
  this.convertionType = this.type.toLowerCase();
}
 console.log(this.rate); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvertPage');
  }

  round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  };

  convert(amount:any){
     amount = parseFloat(amount);
     if(this.convertionType==='btc'){
       console.log(this.type);
       this.total = (amount * this.rate);
       this.total = this.round(this.total,2);
      } else if (this.convertionType === 'naira' || this.convertionType === 'usd'){
        console.log(this.rate);
        console.log(this.amount);
      this.total = (amount / this.rate);
      this.total = this.round(this.total, 2);
    }
      }
  }
  


