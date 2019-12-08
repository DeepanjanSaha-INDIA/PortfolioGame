import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private key: string;
  constructor(private service: MainService) { }

  send(){
    if (isNaN(parseInt(this.key))){
      this.service.sendKey(-1);
    } else {
      this.service.sendKey(parseInt(this.key));
    }
    
  }
  ngOnInit() {
    document.body.classList.add('bg-image');
  }

}
