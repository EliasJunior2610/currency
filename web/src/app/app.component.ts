// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './service/currency.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'proj';
  rate: any;
  history: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.getCurrencyRate('USD', 'EUR');
    this.getCurrencyHistory('USD', 'EUR');
  }

  getCurrencyRate(baseCurrency: string, targetCurrency: string) {
    this.currencyService.getRate(baseCurrency, targetCurrency).subscribe(
      (data) => {
        this.rate = data;
      },
      (error) => {
        console.error('Error fetching rate:', error);
      }
    );
  }

  getCurrencyHistory(baseCurrency: string, targetCurrency: string) {
    this.currencyService.getHistory(baseCurrency, targetCurrency).subscribe(
      (data) => {
        this.history = data;
      },
      (error) => {
        console.error('Error fetching history:', error);
      }
    );
  }
}