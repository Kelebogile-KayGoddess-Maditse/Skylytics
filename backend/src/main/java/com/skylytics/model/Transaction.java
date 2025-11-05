package com.skylytics.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double amount;
    private String status;
    private LocalDateTime timestamp;

    public Transaction() {}
    public Transaction(Double amount, String status, LocalDateTime timestamp) {
        this.amount = amount;
        this.status = status;
        this.timestamp = timestamp;
    }

    public Long getId() { return id; }
    public Double getAmount() { return amount; }
    public String getStatus() { return status; }
    public LocalDateTime getTimestamp() { return timestamp; }
}
