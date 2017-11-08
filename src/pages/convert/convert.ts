import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-convert',
  templateUrl: 'convert.html',
})
export class ConvertPage {

  selected:string='';
  amount:number;
  type:string;
  rate:number =0;
  total:number;
  convertionType:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selected = this.navParams.get("selected");
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
     if(this.convertionType===this.selected.toLowerCase()){
       console.log(this.type);
       this.total = (amount * this.rate);
       this.total = this.round(this.total,2);
      } else if (this.convertionType === this.type.toLowerCase()){
        console.log(this.rate);
        console.log(this.amount);
      this.total = (amount / this.rate);
      this.total = this.round(this.total, 2);
    }
      }
  }
  


