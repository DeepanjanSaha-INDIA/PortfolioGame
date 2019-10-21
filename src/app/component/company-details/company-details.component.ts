import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor() { }

  private stockList = [400, 320, 300, 270, 240, 210, 180, 150, 120, 100, 80, 60, 40, 20, 0];
  private years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private companyDetails = [{name: 'A', chance: [0], quantity: 0}, {name: 'B', chance: [0], quantity: 0},
  {name: 'C', chance: [0, 0], quantity: 0}, {name: 'D', chance: [0, 0], quantity: 0}, 
  {name: 'E', chance: [0, 0, 0], quantity: 0}, {name: 'F', chance: [0, 0, 0], quantity: 0}];
  private diceMap = {0: '--', 1: 'up', 2: 'dn'};
  ngOnInit() {
  }

}
