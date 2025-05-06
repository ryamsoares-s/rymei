"use client";

import { useState } from "react";
import { TransactionForm } from "./transaction-form";
import { TransactionList } from "./transaction-list";
import { FinancialSummary } from "./financial-summary";
import { Navbar } from "./navbar";
import { WelcomeCard } from "./welcome-card";
import type { Transaction } from "@/types/transaction";

export function FinancialDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([
      ...transactions,
      { ...transaction, id: Date.now().toString() },
    ]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
  };

  // Calculate totals
  const revenue = transactions
    .filter((t) => t.type === "revenue")
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = revenue - expenses;

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <WelcomeCard />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FinancialSummary
              revenue={revenue}
              expenses={expenses}
              balance={balance}
            />
            <TransactionForm onAddTransaction={addTransaction} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-teal-100">
            <h2 className="text-xl font-semibold mb-4 text-teal-800 flex items-center">
              <span className="inline-block w-1 h-6 bg-teal-500 mr-3 rounded"></span>
              Histórico de Transações
            </h2>
            <TransactionList
              transactions={transactions}
              onDeleteTransaction={deleteTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
