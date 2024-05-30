package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.CurrencyRate;

public interface CurrencyRateRepository extends JpaRepository<CurrencyRate, Long> {
    CurrencyRate findTopByBaseCurrencyAndTargetCurrencyOrderByDateDesc(String baseCurrency, String targetCurrency);
}