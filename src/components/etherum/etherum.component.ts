import { Component } from '@angular/core';
import { CryptoInfoProvider } from '../../providers/crypto-info/crypto-info';


@Component({
  selector: 'app-etherum',
  templateUrl: 'etherum.component.html'
})
export class EtherumComponent {


  err: string;
  currentNGN: number = 0;
  currentUSD: number = 0;
  currentBTC: number = 0;
  constructor(private crypto: CryptoInfoProvider) {

    this.crypto.getCryptoInfo().subscribe(data => {
      this.currentUSD = data.ETH.USD;
      this.currentNGN = data.ETH.NGN;
      this.currentBTC = data.ETH.BTC;
    },
      err => {
        this.err = "Failed To Get Realtime Rate Please, Check Your Data Connection";
      }
    );
  }



}
