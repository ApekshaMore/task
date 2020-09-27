import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonServService } from 'src/app/service/json-serv.service';
import { DataDispComponent } from './components/data-disp/data-disp.component';
@NgModule({
  declarations: [
    AppComponent,
    DataDispComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JsonServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
