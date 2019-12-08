import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../model/data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // Creates an instance of Data model and implements behaviour subject
  private data : Data = new Data();
  private dataBehaviourSubject = new BehaviorSubject<Data>(this.data);
  dataObservable = this.dataBehaviourSubject.asObservable();

  // API endpoint and it's response stored in "response" 
  private response: object;
  private url = "https://32bs83hc91.execute-api.ap-south-1.amazonaws.com/generateRandomNumber/host/?key=";

  constructor(private http: HttpClient, private router: Router) { }

  // Updates year, stocks in CompanyDetailsComponent and stats in SummaryComponent
  yearUpdate() {
    this.data.year += 1;
    this.updateStocks();
    this.updateStats();
    this.dataBehaviourSubject.next(this.data);
  }

  // Fetches response from API and stores it. Also navigates to game page.
  sendKey(key: number){
    console.log(this.url+key);
    this.http.get(this.url + key).subscribe((data) => {
      this.data.response = data["body"];
      console.log("data:", data["body"]);
      this.dataBehaviourSubject.next(this.data);
      this.router.navigate(['game']);
    });
  }

  // Updates stocks of company, using the response and also covers overflow condition.
  updateStocks(){
    let iterativeList = [[0, 0], [1, 0], [2, 0], [2, 1], [3, 0], [3, 1],
                 [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]];
    let randomVal = 0;
    // 12 iterations
    for (let index in iterativeList){
      randomVal = this.data.response["random"][this.data.year-1][index];
      // Shows 'up' and 'dn' in 'company-details.component.html'
      this.data.companyDetails[iterativeList[index][0]].chance[iterativeList[index][1]] = randomVal;
      // Go down condition
      if ([3, 6].includes(randomVal)){
        this.data.companyDetails[iterativeList[index][0]].stockIndex += 1;
      }
      // Go up condition
      else if ([2, 5, 8].includes(randomVal)){
        this.data.companyDetails[iterativeList[index][0]].stockIndex -= 1;
      }
    }
    for (let index = 0; index < 6; index++){
      if(this.data.companyDetails[index]["stockIndex"] < 3){
        this.data.companyDetails[index]["stockIndex"] += 6;
        this.data.companyDetails[index]["quantity"] *= 4;
      }
      this.data.yearStats[this.data.year]["stockIndex"][index] = this.data.companyDetails[index]["stockIndex"];
    }
    console.log(this.data.yearStats);
  }

  // Calculates the yearwise statistics from updated company details to be displayed in SummaryComponent
  updateStats() {
    let interest = 0;
    let stocks = 0;
    let stocksValue = 0;
    let stocksQuantity = 0;

    this.data.yearStats[this.data.year].cash = this.data.cash;
    // console.log(this.data.companyDetails[0].stockIndex);
    for (let ind in this.data.companyDetails){
      stocksQuantity = this.data.companyDetails[ind].quantity;
      stocksValue = this.data.stockList[this.data.companyDetails[ind].stockIndex];
      stocks += stocksQuantity*stocksValue;
      // Interest for Company 'A' and 'B' are 20% of stock value.
      if ((this.data.companyDetails[ind].name == 'A')||(this.data.companyDetails[ind].name == 'B')){
        interest += 0.2*stocksQuantity*stocksValue;
      }
      // Interest for Company 'C' and 'D' are 10% of stock value.
      if ((this.data.companyDetails[ind].name == 'C')||(this.data.companyDetails[ind].name == 'D')){
        interest += 0.1*stocksQuantity*stocksValue;
      }
    }
    // Updating Interest, Stock value, Total value and Cash
    this.data.yearStats[this.data.year].interest = interest;
    this.data.yearStats[this.data.year].stocks = stocks;
    this.data.yearStats[this.data.year].total = this.data.cash + interest + stocks;
    this.data.cash += interest;
  }

  // Function used to update Data model instance from component.
  update(newData: Data) {
    this.dataBehaviourSubject.next(newData);
  }
}
