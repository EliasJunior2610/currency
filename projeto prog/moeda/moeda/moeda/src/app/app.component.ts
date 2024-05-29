import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyService } from '../app/services/currency.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'moeda';
  amountOne: number = 1;
  amountTwo: number | undefined;
  currencyOne: string = 'USD';
  currencyTwo: string = 'INR';
  rate: string | undefined;
  currencies: string[] = [
    'AED',
    'ARS',
    'AUD',
    'BGN',
    'BRL',
    'BSD',
    'CAD',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CZK',
    'DKK',
    'DOP',
    'EGP',
    'EUR',
    'FJD',
    'GBP',
    'GTQ',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JPY',
    'KRW',
    'KZT',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PAB',
    'PEN',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'RON',
    'RUB',
    'SAR',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'TWD',
    'UAH',
    'USD',
    'UYU',
    'VND',
    'ZAR',
  ];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.calculate();
  }

  calculate(): void {
    this.currencyService
      .getRate(this.currencyOne, this.currencyTwo)
      .subscribe((data) => {
        const rate = data.rate;
        this.rate = `1 ${this.currencyOne} = ${rate} ${this.currencyTwo}`;
        this.amountTwo = this.amountOne * rate;
      });
  }

  swap(): void {
    [this.currencyOne, this.currencyTwo] = [this.currencyTwo, this.currencyOne];
    this.calculate();
  }
}
