import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import { SummaryComponent } from './component/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyDetailsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
