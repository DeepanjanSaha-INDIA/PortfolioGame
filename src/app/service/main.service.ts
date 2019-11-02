import { Injectable, EventEmitter } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { Data } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private data : Data = new Data();
  private dataBehaviourSubject = new BehaviorSubject<Data>(this.data);
  dataObservable = this.dataBehaviourSubject.asObservable();
  
  // public cashUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  // sendCompanyDetails() {
  //   return this.companyDetails;
  // }

  yearUpdate() {
    this.data.year += 1;
    this.data.companyDetails[0].chance[0] = this.data.response["random"][this.data.year][0];
    this.data.companyDetails[1].chance[0] = this.data.response["random"][this.data.year][1];
    this.data.companyDetails[2].chance[0] = this.data.response["random"][this.data.year][2];
    this.data.companyDetails[2].chance[1] = this.data.response["random"][this.data.year][3];
    this.data.companyDetails[3].chance[0] = this.data.response["random"][this.data.year][4];
    this.data.companyDetails[3].chance[1] = this.data.response["random"][this.data.year][5];
    this.data.companyDetails[4].chance[0] = this.data.response["random"][this.data.year][6];
    this.data.companyDetails[4].chance[1] = this.data.response["random"][this.data.year][7];
    this.data.companyDetails[4].chance[2] = this.data.response["random"][this.data.year][8];
    this.data.companyDetails[5].chance[0] = this.data.response["random"][this.data.year][9];
    this.data.companyDetails[5].chance[1] = this.data.response["random"][this.data.year][10];
    this.data.companyDetails[5].chance[2] = this.data.response["random"][this.data.year][11];
    this.dataBehaviourSubject.next(this.data);
  }

  update(newData: Data) {
    this.dataBehaviourSubject.next(newData);
  }

  // getCash(): Observable<number> {
  //   return of(this.cash);
  // }

  // setCash(cash: number){
  //   this.cash = cash;
  //   this.cashUpdate.emit(this.cash);
  // }
}
