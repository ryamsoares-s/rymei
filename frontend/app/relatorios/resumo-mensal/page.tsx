// app/relatorios/resumo-mensal/page.tsx

import { Navbar } from "@/components/navbar"; // Certifique-se de que o caminho esteja correto para o componente Navbar
import { ResumoMensalChart } from "@/components/resumo-mensal-chart"; // Verifique se o caminho está correto para o componente ResumoMensalChart

export default function ResumoMensalPage() {
  // Dados fictícios para exibição no gráfico. Você deve buscar esses dados do banco de dados ou de um estado global.
  const data = [
    { mes: "Janeiro", receita: 5000, despesa: 3000 },
    { mes: "Fevereiro", receita: 4500, despesa: 2500 },
    { mes: "Março", receita: 6000, despesa: 3200 },
    { mes: "Abril", receita: 5500, despesa: 2700 },
    // Adicione mais dados conforme necessário
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <ResumoMensalChart data={data} />{" "}
        {/* Passando os dados para o componente ResumoMensalChart */}
      </div>
    </div>
  );
}
