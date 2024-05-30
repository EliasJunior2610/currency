import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

@NgModule ({
  providers: [HttpClient],
})

export class CurrencyService {
  private apiUrl = 'http://localhost:8080/api/currency';

  constructor(private http: HttpClient) {}

  getRate(baseCurrency: string, targetCurrency: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/rate`, {
      params: { baseCurrency, targetCurrency },
    });
  }

  getHistory(baseCurrency: string, targetCurrency: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/history`, {
      params: { baseCurrency, targetCurrency },
    });
  }
}
