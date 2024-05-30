import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
