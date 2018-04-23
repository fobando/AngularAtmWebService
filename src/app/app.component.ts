import { Component, OnInit } from '@angular/core';
// import { AtmServiceService } from './services/atm-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/atm').subscribe(data => {console.log('Test1 ' + data); });
  }

  /*
  getBalance: number;
  deposit: number;
  withDraw: number;
  lastTransaction: number;

  constructor ( public atmService: AtmServiceService) {
    this.getBalance = atmService.getAccountBalance('123');
    this.deposit = atmService.depositMoney('123', 100);
    this.withDraw = atmService.withDrawMoney ('123', 200);
    this.lastTransaction = atmService.getLastTransactionAmount('123');
  }
*/
}
