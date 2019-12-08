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

  // Calls yearUpdate() from MainService, if year < 10.
  clicked() {
    if(this.data.year >= 10)
      return;
    this.service.yearUpdate();
  }

  ngOnInit() {
    // Subscribing to Behaviour subject
    this.service.dataObservable.subscribe((data) => {this.data = data;});
  }
}
