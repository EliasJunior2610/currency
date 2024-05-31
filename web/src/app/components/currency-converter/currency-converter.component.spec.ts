import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';

describe('CurrecyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyConverterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
