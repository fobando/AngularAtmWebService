import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { AtmServiceService } from './services/atm-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
