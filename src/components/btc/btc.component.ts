import { Component } from '@angular/core';
import { CryptoInfoProvider } from '../../providers/crypto-info/crypto-info';


@Component({
  selector: 'app-btc',
  templateUrl: 'btc.component.html'
})
export class btcComponent {

  
  err:string;
  currentNGN: number = 0;
  currentUSD: number = 0;
  currentETH: number = 0;
  constructor(private crypto: CryptoInfoProvider) {

     this.crypto.getCryptoInfo().subscribe(data => {
      this.currentUSD = data.BTC.USD;
      this.currentNGN = data.BTC.NGN;
      this.currentETH = data.BTC.ETH;
     },
     err=>{
       this.err="Failed To Get Realtime Rate Please, Check Your Data Connection";
  }
  ); 
  }



}
