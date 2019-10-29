import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  private years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  display() {
    console.log(this.years);
  }
  ngOnInit() {
    this.display();
  }

}
