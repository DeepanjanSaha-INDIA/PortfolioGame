import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private service: MainService ) { }
  private year: number;
  private cash: number;

  clicked() {
    this.year = this.service.sendClick();
  }

  ngOnInit() {
    this.service.getYear().subscribe((year) => {this.year = year});
    this.service.getCash().subscribe((cash) => {this.cash = cash});
  }
}
