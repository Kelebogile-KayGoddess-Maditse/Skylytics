package com.skylytics.service;

import com.skylytics.model.Transaction;
import com.skylytics.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TransactionService {
    private final TransactionRepository repo;

    public TransactionService(TransactionRepository repo) {
        this.repo = repo;
    }

    public List<Transaction> getAllTransactions() {
        return repo.findAll();
    }

    public Transaction createTransaction(Transaction transaction) {
        return repo.save(transaction);
    }
}
