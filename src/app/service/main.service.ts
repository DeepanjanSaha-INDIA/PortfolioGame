import { Injectable, EventEmitter } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private year: number = 0;
  private cash: number = 500;
  private companyDetails = [{name: 'A', chance: [0], quantity: 0, stockIndex: 9}, 
                            {name: 'B', chance: [0], quantity: 0, stockIndex: 9},
                            {name: 'C', chance: [0, 0], quantity: 0, stockIndex: 9}, 
                            {name: 'D', chance: [0, 0], quantity: 0, stockIndex: 9}, 
                            {name: 'E', chance: [0, 0, 0], quantity: 0, stockIndex: 9}, 
                            {name: 'F', chance: [0, 0, 0], quantity: 0, stockIndex: 9}];
  public cashUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  sendCompanyDetails() {
    return this.companyDetails;
  }

  sendClick(): number {
    this.year += 1;
    return this.year;
  }

  getYear(): Observable<number> {
    return of(this.year);
  }

  getCash(): Observable<number> {
    return of(this.cash);
  }

  setCash(cash: number){
    this.cash = cash;
    this.cashUpdate.emit(this.cash);
  }
}
