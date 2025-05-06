import { ArrowDownCircle, ArrowUpCircle, DollarSign } from "lucide-react";

interface FinancialSummaryProps {
  revenue: number;
  expenses: number;
  balance: number;
}

export function FinancialSummary({
  revenue,
  expenses,
  balance,
}: FinancialSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-teal-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Receitas</p>
            <p className="text-2xl font-bold text-teal-600">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(revenue)}
            </p>
          </div>
          <div className="p-2 bg-teal-100 rounded-full">
            <ArrowUpCircle className="h-6 w-6 text-teal-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-teal-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Despesas</p>
            <p className="text-2xl font-bold text-red-500">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(expenses)}
            </p>
          </div>
          <div className="p-2 bg-red-100 rounded-full">
            <ArrowDownCircle className="h-6 w-6 text-red-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-teal-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Saldo</p>
            <p
              className={`text-2xl font-bold ${balance >= 0 ? "text-teal-700" : "text-red-500"}`}
            >
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(balance)}
            </p>
          </div>
          <div
            className={`p-2 ${balance >= 0 ? "bg-teal-100" : "bg-red-100"} rounded-full`}
          >
            <DollarSign
              className={`h-6 w-6 ${balance >= 0 ? "text-teal-700" : "text-red-500"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
