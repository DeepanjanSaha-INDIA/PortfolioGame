import { Component, OnInit, Inject } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { Data } from 'src/app/model/data';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private service: MainService) { 
  }

  private data: Data;
  private diceMap = {1: '--', 2: 'up', 3: 'dn', 4: '--', 5: 'up', 6: 'dn', 7: '--', 8: 'up' };

  // Implementing the '+' functionality.
  add(compName){
    let cashInHand: number = this.data.cash;
    let stockPrice = this.data.stockList[compName.stockIndex];
    // Condition when stock addition is possible.
    if (cashInHand >= stockPrice){
      compName.quantity += 1;
      this.data.cash = cashInHand - stockPrice;
      this.service.update(this.data);
    }
  }

  // Implementing the '-' functionality.
  remove(compName){
    let cashInHand: number = this.data.cash;
    let stockPrice = this.data.stockList[compName.stockIndex];
    // Condition when stock reduction is possible.
    if (compName.quantity > 0){
      compName.quantity -= 1;
      this.data.cash = cashInHand + stockPrice;
      this.service.update(this.data);
    }
  }

  ngOnInit() {
    // Subscribing to Behaviour subject
    this.service.dataObservable.subscribe((data) => {
      this.data = data;
    });
  }

}
