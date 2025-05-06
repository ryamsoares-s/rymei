"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type SummaryData = {
  mes: string;
  receita: number;
  despesa: number;
};

type Props = {
  data: SummaryData[];
};

export function ResumoMensalChart({ data }: Props) {
  const processed = data.map((item) => ({
    ...item,
    saldo: item.receita - item.despesa,
  }));

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-teal-100 mt-10">
      <h2 className="text-3xl font-bold text-teal-800 mb-6">
        Resumo Mensal de Receitas e Despesas
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processed}
            barGap={12}
            barCategoryGap={28}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: "#0f766e", fontWeight: 600 }} />
            <YAxis tick={{ fill: "#0f766e" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ecfdf5",
                borderRadius: "10px",
                border: "1px solid #99f6e4",
              }}
              labelStyle={{ fontWeight: "bold", color: "#0f766e" }}
              formatter={(value: number, name: string) => [
                `R$ ${value.toFixed(2)}`,
                name.charAt(0).toUpperCase() + name.slice(1),
              ]}
            />
            <Legend />
            <Bar
              dataKey="receita"
              name="Receita"
              fill="url(#gradientReceita)"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="despesa"
              name="Despesa"
              fill="url(#gradientDespesa)"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="saldo"
              name="Saldo"
              fill="url(#gradientSaldo)"
              radius={[6, 6, 0, 0]}
            />

            {/* Gradientes SVG */}
            <defs>
              <linearGradient id="gradientReceita" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#99f6e4" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="gradientDespesa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f87171" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#fecaca" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="gradientSaldo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
