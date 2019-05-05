import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionService } from './app.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [
    AppComponent,
  DescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
