"use client";

import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../utils/api";

interface Transaction {
  id: number;
  amount: number;
  status: string;
  timestamp: string;
}

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions().then(setTransactions);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Recent Transactions
      </h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-gray-50">
              <td className="border p-2">{t.id}</td>
              <td className="border p-2">${t.amount.toFixed(2)}</td>
              <td
                className={`border p-2 ${
                  t.status === "SUCCESS"
                    ? "text-green-600"
                    : t.status === "FAILED"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {t.status}
              </td>
              <td className="border p-2">
                {new Date(t.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
