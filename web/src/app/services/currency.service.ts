// src/app/services/currency.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'http://localhost:8080/api/currency';

  constructor(private http: HttpClient) {}

  getRate(baseCurrency: string, targetCurrency: string): Observable<any> {
    return this.http.get(${this.apiUrl}/rate, {
      params: {
        baseCurrency,
        targetCurrency,
      },
    });
  }

  getHistory(baseCurrency: string, targetCurrency: string): Observable<any> {
    return this.http.get(${this.apiUrl}/history, {
      params: {
        baseCurrency,
        targetCurrency,
      },
    });
  }
}