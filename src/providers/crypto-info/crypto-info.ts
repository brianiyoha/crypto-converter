import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CRYPTO } from "../../model/crypto/crypto.interface";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CryptoInfoProvider {
  
  base_url: string = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,NGN,BTC,ETH";

  constructor(public http: Http) {
    console.log('Hello CryptoInfoProvider Provider');
  }

  getCryptoInfo():Observable<CRYPTO> {
    return this.http.get(this.base_url)
    .do(this.logData)
    .map(data => {
        return data.json();
      })
      .do(this.logData)
      .catch(this.handleError);
  }

  private logData(response: Response) {
    console.log(response);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error.json().error || "Error ");
  }
}
