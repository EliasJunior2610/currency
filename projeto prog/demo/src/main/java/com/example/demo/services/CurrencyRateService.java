package com.example.demo.services;

// CurrencyRateService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entities.CurrencyRate;
import com.example.demo.entities.CurrencyRateHistory;
import com.example.demo.repositories.CurrencyRateHistoryRepository;
import com.example.demo.repositories.CurrencyRateRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class CurrencyRateService {
    @Autowired
    private CurrencyRateRepository currencyRateRepository;

    @Autowired
    private CurrencyRateHistoryRepository currencyRateHistoryRepository;

    private final RestTemplate restTemplate = new RestTemplate();
    private final String apiUrl = "https://api.exchangerate-api.com/v4/latest/";

    public CurrencyRate getRate(String baseCurrency, String targetCurrency) {
        String url = apiUrl + baseCurrency;
        @SuppressWarnings("unchecked")
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);
        @SuppressWarnings({ "unchecked", "null" })
        Map<String, Double> rates = (Map<String, Double>) response.get("rates");
        double rate = rates.get(targetCurrency);

        CurrencyRate currencyRate = new CurrencyRate();
        currencyRate.setBaseCurrency(baseCurrency);
        currencyRate.setTargetCurrency(targetCurrency);
        currencyRate.setRate(rate);
        currencyRate.setDate(LocalDate.now());
        currencyRateRepository.save(currencyRate);

        CurrencyRateHistory history = new CurrencyRateHistory();
        history.setBaseCurrency(baseCurrency);
        history.setTargetCurrency(targetCurrency);
        history.setRate(rate);
        history.setTimestamp(LocalDateTime.now());
        currencyRateHistoryRepository.save(history);

        return currencyRate;
    }

    public List<CurrencyRateHistory> getHistory(String baseCurrency, String targetCurrency) {
        return currencyRateHistoryRepository.findTop7ByBaseCurrencyAndTargetCurrencyOrderByTimestampDesc(baseCurrency, targetCurrency);
    }
}

