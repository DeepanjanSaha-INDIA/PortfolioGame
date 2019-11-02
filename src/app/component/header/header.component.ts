import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { Observable } from 'rxjs';
import { Data } from 'src/app/model/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private service: MainService ) {
  }
  private data: Data;

  clicked() {
    this.service.yearUpdate();
  }

  ngOnInit() {
    this.service.dataObservable.subscribe((data) => {this.data = data;});
  }
}
