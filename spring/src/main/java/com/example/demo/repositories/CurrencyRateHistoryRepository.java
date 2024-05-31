package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.CurrencyRateHistory;

public interface CurrencyRateHistoryRepository extends JpaRepository<CurrencyRateHistory, Long> {
    List<CurrencyRateHistory> findTop7ByBaseCurrencyAndTargetCurrencyOrderByTimestampDesc(String baseCurrency, String targetCurrency);
}
