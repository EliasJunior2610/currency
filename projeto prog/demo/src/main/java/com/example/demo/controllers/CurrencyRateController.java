package com.example.demo.controllers;

// CurrencyRateController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.CurrencyRate;
import com.example.demo.entities.CurrencyRateHistory;
import com.example.demo.services.CurrencyRateService;

import java.util.List;

@RestController
@RequestMapping("/api/currency")
public class CurrencyRateController {
    @Autowired
    private CurrencyRateService currencyRateService;

    @GetMapping("/rate")
    public CurrencyRate getRate(@RequestParam String baseCurrency, @RequestParam String targetCurrency) {
        return currencyRateService.getRate(baseCurrency, targetCurrency);
    }

    @GetMapping("/history")
    public List<CurrencyRateHistory> getHistory(@RequestParam String baseCurrency, @RequestParam String targetCurrency) {
        return currencyRateService.getHistory(baseCurrency, targetCurrency);
    }
}
