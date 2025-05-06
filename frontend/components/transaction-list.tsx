"use client";

import { Trash2 } from "lucide-react";
import type { Transaction } from "@/types/transaction";
import { Button } from "@/components/ui/button";

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}

export function TransactionList({
  transactions,
  onDeleteTransaction,
}: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 bg-teal-50/50 rounded-lg border border-teal-100 border-dashed">
        <p className="text-teal-600 font-medium">
          Nenhuma transação registrada
        </p>
        <p className="text-sm mt-1">
          Adicione sua primeira transação no formulário ao lado
        </p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-BR").format(date);
  };

  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`p-4 rounded-lg border-l-4 ${
            transaction.type === "revenue"
              ? "border-l-teal-500 bg-teal-50"
              : "border-l-red-500 bg-red-50"
          } flex justify-between items-center transition-all hover:shadow-sm`}
        >
          <div>
            <p className="font-medium">{transaction.description}</p>
            <div className="flex space-x-3 text-sm text-gray-500">
              <span>{formatDate(transaction.date)}</span>
              <span
                className={
                  transaction.type === "revenue"
                    ? "text-teal-600"
                    : "text-red-500"
                }
              >
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDeleteTransaction(transaction.id)}
            className="text-gray-400 hover:text-red-500 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Excluir</span>
          </Button>
        </div>
      ))}
    </div>
  );
}
