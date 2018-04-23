import { Injectable } from '@angular/core';

@Injectable()
export class AtmServiceService {

  constructor() { }

  getAccountBalance(acctNumber: string): number {
    return 200;
  }

  depositMoney(acctNumber: string, amount: number): number {
    return 100;
  }

  withDrawMoney(acctNumber: string, amount: number): number {
    return 400;
  }

  getLastTransactionAmount(acctNumber: string): number {
    return 300;
  }

}
