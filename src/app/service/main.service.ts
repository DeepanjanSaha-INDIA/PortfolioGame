import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../model/data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private data : Data = new Data();
  private dataBehaviourSubject = new BehaviorSubject<Data>(this.data);
  dataObservable = this.dataBehaviourSubject.asObservable();
  private response: object;
  private url = "https://32bs83hc91.execute-api.ap-south-1.amazonaws.com/generateRandomNumber/host/?key=";

  constructor(private http: HttpClient, private router: Router) { }

  yearUpdate() {
    this.data.year += 1;
    this.updateStocks();
    this.updateStats();
    this.dataBehaviourSubject.next(this.data);
  }

  sendKey(key: number){
    console.log(this.url+key);
    this.http.get(this.url + key).subscribe((data) => {
      this.data.response = data["body"];
      console.log("data:", data["body"]);
      this.dataBehaviourSubject.next(this.data);
      this.router.navigate(['game']);
    });
  }

  updateStocks(){
    let iterativeList = [[0, 0], [1, 0], [2, 0], [2, 1], [3, 0], [3, 1],
                 [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]];
    let randomVal = 0;
    for (let index in iterativeList){
      randomVal = this.data.response["random"][this.data.year-1][index];
      this.data.companyDetails[iterativeList[index][0]].chance[iterativeList[index][1]] = randomVal;
      if ([3, 6].includes(randomVal)){
        this.data.companyDetails[iterativeList[index][0]].stockIndex += 1;
      }
      else if ([2, 5, 8].includes(randomVal)){
        this.data.companyDetails[iterativeList[index][0]].stockIndex -= 1;
      }
    }
  }

  updateStats() {
    let interest = 0;
    let stocks = 0;
    let stocksValue = 0;
    let stocksQuantity = 0;

    this.data.yearStats[this.data.year].cash = this.data.cash;
    console.log(this.data.companyDetails[0].stockIndex);
    for (let ind in this.data.companyDetails){
      stocksQuantity = this.data.companyDetails[ind].quantity;
      stocksValue = this.data.stockList[this.data.companyDetails[ind].stockIndex];
      stocks += stocksQuantity*stocksValue;
      if ((this.data.companyDetails[ind].name == 'A')||(this.data.companyDetails[ind].name == 'B')){
        interest += 0.2*stocksQuantity*stocksValue;
      }
      if ((this.data.companyDetails[ind].name == 'C')||(this.data.companyDetails[ind].name == 'D')){
        interest += 0.1*stocksQuantity*stocksValue;
      }
    }
      this.data.yearStats[this.data.year].interest = interest;
      this.data.yearStats[this.data.year].stocks = stocks;
      this.data.yearStats[this.data.year].total = this.data.cash + interest + stocks;
      this.data.cash += interest;
  }
  update(newData: Data) {
    this.dataBehaviourSubject.next(newData);
  }
}
