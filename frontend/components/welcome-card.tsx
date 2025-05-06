import { TrendingUp } from "lucide-react";

export function WelcomeCard() {
  // Get current date in Portuguese format
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Capitalize first letter
  const formattedDate =
    currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl shadow-lg p-6 text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Bem-vindo ao Rymei
          </h1>
          <p className="text-teal-100">{formattedDate}</p>
          <p className="mt-2 text-teal-50">
            Gerencie suas finanças com simplicidade e eficiência
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="p-2 bg-white/20 rounded-full mr-3">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-teal-100">Dica do dia</p>
            <p className="text-white font-medium">
              Categorize suas despesas para melhor controle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
