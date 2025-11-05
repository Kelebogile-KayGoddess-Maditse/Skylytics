-- ========================================
-- 🌐 Skylytics Initial Data Seed
-- ========================================

-- Only create table if it doesn't exist (H2-safe)
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(10,2),
    status VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample transactions
INSERT INTO transactions (amount, status, timestamp)
VALUES
  (1050.25, 'SUCCESS', NOW() - INTERVAL '2 DAYS'),
  (240.00, 'PENDING', NOW() - INTERVAL '1 DAY'),
  (499.99, 'FAILED', NOW() - INTERVAL '12 HOURS'),
  (1499.99, 'SUCCESS', NOW() - INTERVAL '3 HOURS'),
  (300.00, 'SUCCESS', NOW());
