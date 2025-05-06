// app/minha-conta/page.tsx
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { User, FileText, CreditCard, LogOut } from "lucide-react";

export default function MinhaContaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">Minha Conta</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6 text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-12 w-12 text-teal-600" />
              </div>

              <h2 className="text-xl font-semibold text-teal-700">
                João da Silva
              </h2>
              <p className="text-gray-500 mb-4">
                MEI - Desenvolvimento de Software
              </p>

              <div className="text-sm text-gray-600 mb-4">
                <p>CNPJ: 12.345.678/0001-90</p>
                <p>joao@exemplo.com</p>
                <p>(11) 98765-4321</p>
              </div>

              <Button
                variant="outline"
                className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
              >
                Editar Perfil
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
              <h2 className="text-xl font-semibold text-teal-700 mb-4">
                Resumo da Conta
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Plano Atual</p>
                  <p className="text-lg font-semibold text-teal-700">Básico</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Próxima Cobrança</p>
                  <p className="text-lg font-semibold text-teal-700">
                    15/06/2025
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <p className="text-lg font-semibold text-green-600">Ativo</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Atualizar Plano
                </Button>
                <Button
                  variant="outline"
                  className="border-teal-200 text-teal-700 hover:bg-teal-50"
                >
                  Ver Histórico de Pagamentos
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-semibold text-teal-700">
                    Meus Documentos
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Acesse seus documentos fiscais e comprovantes.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
                >
                  Ver Documentos
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-semibold text-teal-700">
                    Pagamentos
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Gerencie seus métodos de pagamento e faturas.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
                >
                  Gerenciar
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <LogOut className="h-6 w-6 text-red-500 mr-3" />
                  <h3 className="text-lg font-semibold text-red-500">
                    Sair da Conta
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Encerre sua sessão no sistema Rymei.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-red-200 text-red-500 hover:bg-red-50"
                >
                  Sair
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
              <h2 className="text-xl font-semibold text-teal-700 mb-4">
                Atividade Recente
              </h2>

              <div className="space-y-4">
                <div className="flex items-start border-b pb-4">
                  <div className="p-2 bg-blue-100 rounded-full mr-3">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Perfil atualizado</p>
                    <p className="text-sm text-gray-500">
                      Você atualizou suas informações de contato
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Hoje, 10:23</p>
                  </div>
                </div>

                <div className="flex items-start border-b pb-4">
                  <div className="p-2 bg-green-100 rounded-full mr-3">
                    <CreditCard className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Pagamento processado</p>
                    <p className="text-sm text-gray-500">
                      Pagamento mensal do plano Básico
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      15/05/2025, 08:45
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-yellow-100 rounded-full mr-3">
                    <FileText className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium">Documento adicionado</p>
                    <p className="text-sm text-gray-500">
                      Você adicionou um novo comprovante fiscal
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      10/05/2025, 14:30
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
