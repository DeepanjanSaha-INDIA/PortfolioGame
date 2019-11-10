import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  private data: Data;
  private year: number;

  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.dataObservable.subscribe((data) => {
      this.data = data;
      this.year = data.year;
    });
  }
}
