// app/relatorios/page.tsx
import { Navbar } from "@/components/navbar";
import { BarChart3, PieChart, TrendingUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RelatoriosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">
          Relatórios Financeiros
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-teal-700">
                Resumo Mensal
              </h2>
              <BarChart3 className="h-6 w-6 text-teal-500" />
            </div>
            <p className="text-gray-600 mb-4">
              Visualize um resumo das suas receitas e despesas mensais.
            </p>
            <Link href="/relatorios/resumo-mensal" passHref>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Ver Relatório
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-teal-700">
                Categorias
              </h2>
              <PieChart className="h-6 w-6 text-teal-500" />
            </div>
            <p className="text-gray-600 mb-4">
              Analise suas despesas por categoria para melhor controle.
            </p>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              Ver Relatório
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-teal-700">
                Tendências
              </h2>
              <TrendingUp className="h-6 w-6 text-teal-500" />
            </div>
            <p className="text-gray-600 mb-4">
              Acompanhe a evolução das suas finanças ao longo do tempo.
            </p>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              Ver Relatório
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">
            Exportar Relatórios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Relatório Anual</span>
                <Download className="h-4 w-4 text-gray-500" />
              </div>
              <p className="text-sm text-gray-500">Formato PDF</p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Dados Brutos</span>
                <Download className="h-4 w-4 text-gray-500" />
              </div>
              <p className="text-sm text-gray-500">Formato CSV</p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Declaração MEI</span>
                <Download className="h-4 w-4 text-gray-500" />
              </div>
              <p className="text-sm text-gray-500">Formato PDF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
