// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { CurrencyService } from './services/currency.service';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [HttpClient, CurrencyService],
  bootstrap: [],
})
export class AppModule {}