// app/ajuda/page.tsx
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  HelpCircle,
  FileText,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function AjudaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-teal-800 mb-4">
            Como podemos ajudar?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para suas dúvidas sobre o Rymei ou entre em
            contato com nossa equipe de suporte.
          </p>

          <div className="mt-6 max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 py-6 text-base"
              placeholder="Buscar por tópicos de ajuda..."
            />
            <Button className="absolute right-1 top-1 bg-teal-600 hover:bg-teal-700">
              Buscar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <HelpCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-semibold text-teal-700">
                Perguntas Frequentes
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Encontre respostas para as dúvidas mais comuns sobre o Rymei.
            </p>
            <Button
              variant="outline"
              className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
            >
              Ver Perguntas
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-semibold text-teal-700">Tutoriais</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Aprenda a usar todas as funcionalidades do Rymei com nossos guias.
            </p>
            <Button
              variant="outline"
              className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
            >
              Ver Tutoriais
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <MessageCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-semibold text-teal-700">Suporte</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Entre em contato com nossa equipe de suporte para resolver
              problemas.
            </p>
            <Button
              variant="outline"
              className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
            >
              Contatar Suporte
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6 mb-8">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">
            Tópicos Populares
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="#"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <h3 className="font-medium mb-1">
                Como adicionar uma nova transação?
              </h3>
              <p className="text-sm text-gray-500">
                Aprenda a registrar receitas e despesas no sistema.
              </p>
            </a>

            <a
              href="#"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <h3 className="font-medium mb-1">
                Como gerar relatórios financeiros?
              </h3>
              <p className="text-sm text-gray-500">
                Saiba como visualizar e exportar seus dados financeiros.
              </p>
            </a>

            <a
              href="#"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <h3 className="font-medium mb-1">
                Como configurar categorias personalizadas?
              </h3>
              <p className="text-sm text-gray-500">
                Organize suas finanças com categorias que fazem sentido para
                você.
              </p>
            </a>

            <a
              href="#"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <h3 className="font-medium mb-1">
                Como fazer backup dos meus dados?
              </h3>
              <p className="text-sm text-gray-500">
                Proteja suas informações financeiras com backups regulares.
              </p>
            </a>
          </div>
        </div>

        <div className="bg-teal-600 rounded-lg shadow-md p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">
                Precisa de ajuda personalizada?
              </h2>
              <p className="text-teal-100">
                Nossa equipe está disponível para atendê-lo por telefone ou
                email.
              </p>
            </div>

            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">(11) 4002-8922</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
