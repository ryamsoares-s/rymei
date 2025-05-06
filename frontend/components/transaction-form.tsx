"use client";

import type React from "react";

import { useState } from "react";
import type { Transaction } from "@/types/transaction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Plus } from "lucide-react";

interface TransactionFormProps {
  onAddTransaction: (transaction: Transaction) => void;
}

export function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"revenue" | "expense">("revenue");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amount) return;

    const newTransaction: Transaction = {
      id: "",
      description,
      amount: Number.parseFloat(amount),
      type,
      date,
    };

    onAddTransaction(newTransaction);

    // Reset form
    setDescription("");
    setAmount("");
    setType("revenue");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-teal-100">
      <h2 className="text-xl font-semibold mb-4 text-teal-800 flex items-center">
        <span className="inline-block w-1 h-6 bg-teal-500 mr-3 rounded"></span>
        Nova Transação
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Input
              id="description"
              placeholder="Ex: Venda de produto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="border-teal-200 focus:border-teal-400 focus:ring-teal-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Valor (R$)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="border-teal-200 focus:border-teal-400 focus:ring-teal-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Data</Label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="border-teal-200 focus:border-teal-400 focus:ring-teal-400"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-teal-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tipo de Transação</Label>
            <RadioGroup
              value={type}
              onValueChange={(value) => setType(value as "revenue" | "expense")}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="revenue"
                  id="revenue"
                  className="text-teal-600 border-teal-400"
                />
                <Label htmlFor="revenue" className="text-teal-600 font-medium">
                  Receita
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="expense"
                  id="expense"
                  className="text-red-500 border-red-400"
                />
                <Label htmlFor="expense" className="text-red-500 font-medium">
                  Despesa
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" /> Adicionar Transação
        </Button>
      </form>
    </div>
  );
}
