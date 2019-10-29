import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private service: MainService) { }

  private stockList = [400, 320, 300, 270, 240, 210, 180, 150, 120, 100, 80, 60, 40, 20, 0];
  private years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private companyDetails;
  private diceMap = {0: '--', 1: 'up', 2: 'dn'};

  add(compName){
    let cashInHand: number;
    this.service.getCash().subscribe((cash) => {cashInHand = cash;});
    let stockPrice = this.stockList[compName.stockIndex];
    if (cashInHand >= stockPrice){
      compName.quantity += 1;
      this.service.setCash(cashInHand - stockPrice);
      console.log(cashInHand - stockPrice);
    }
  }

  remove(compName){
    let cashInHand: number;
    this.service.getCash().subscribe((cash) => {cashInHand = cash;});
    let stockPrice = this.stockList[compName.stockIndex];
    if (compName.quantity > 0){
      compName.quantity -= 1;
      this.service.setCash(cashInHand + stockPrice);
      console.log(cashInHand + stockPrice);
    }
  }

  ngOnInit() {
    this.companyDetails = this.service.sendCompanyDetails();
  }

}
