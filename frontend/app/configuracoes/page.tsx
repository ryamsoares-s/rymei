// app/configuracoes/page.tsx
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Bell, Shield, CreditCard } from "lucide-react";

export default function ConfiguracoesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">Configurações</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-teal-100 p-4 sticky top-24">
              <nav className="space-y-1">
                <a
                  href="#perfil"
                  className="flex items-center px-3 py-2 text-teal-600 bg-teal-50 rounded-md"
                >
                  <User className="mr-3 h-5 w-5" />
                  <span>Perfil do MEI</span>
                </a>
                <a
                  href="#notificacoes"
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <Bell className="mr-3 h-5 w-5" />
                  <span>Notificações</span>
                </a>
                <a
                  href="#seguranca"
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <Shield className="mr-3 h-5 w-5" />
                  <span>Segurança</span>
                </a>
                <a
                  href="#pagamento"
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <CreditCard className="mr-3 h-5 w-5" />
                  <span>Métodos de Pagamento</span>
                </a>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div
              id="perfil"
              className="bg-white rounded-lg shadow-md border border-teal-100 p-6"
            >
              <h2 className="text-xl font-semibold text-teal-700 mb-4">
                Perfil do MEI
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" defaultValue="João da Silva" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="joao@exemplo.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" defaultValue="(11) 98765-4321" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="atividade">Atividade Principal</Label>
                  <Input
                    id="atividade"
                    defaultValue="Desenvolvimento de programas de computador sob encomenda"
                  />
                </div>

                <Button className="bg-teal-600 hover:bg-teal-700">
                  Salvar Alterações
                </Button>
              </div>
            </div>

            <div
              id="notificacoes"
              className="bg-white rounded-lg shadow-md border border-teal-100 p-6"
            >
              <h2 className="text-xl font-semibold text-teal-700 mb-4">
                Notificações
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <h3 className="font-medium">Alertas de Pagamento</h3>
                    <p className="text-sm text-gray-500">
                      Receba lembretes sobre pagamentos próximos
                    </p>
                  </div>
                  <div className="h-6 w-11 bg-teal-600 rounded-full relative cursor-pointer">
                    <span className="absolute right-1 top-1 bg-white h-4 w-4 rounded-full"></span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <h3 className="font-medium">Relatórios Mensais</h3>
                    <p className="text-sm text-gray-500">
                      Receba um resumo mensal das suas finanças
                    </p>
                  </div>
                  <div className="h-6 w-11 bg-teal-600 rounded-full relative cursor-pointer">
                    <span className="absolute right-1 top-1 bg-white h-4 w-4 rounded-full"></span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <h3 className="font-medium">Dicas Financeiras</h3>
                    <p className="text-sm text-gray-500">
                      Receba dicas para melhorar suas finanças
                    </p>
                  </div>
                  <div className="h-6 w-11 bg-gray-300 rounded-full relative cursor-pointer">
                    <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full"></span>
                  </div>
                </div>

                <Button className="bg-teal-600 hover:bg-teal-700">
                  Salvar Preferências
                </Button>
              </div>
            </div>

            <div
              id="seguranca"
              className="bg-white rounded-lg shadow-md border border-teal-100 p-6"
            >
              <h2 className="text-xl font-semibold text-teal-700 mb-4">
                Segurança
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="senha-atual">Senha Atual</Label>
                  <Input id="senha-atual" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nova-senha">Nova Senha</Label>
                  <Input id="nova-senha" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                  <Input id="confirmar-senha" type="password" />
                </div>

                <Button className="bg-teal-600 hover:bg-teal-700">
                  Alterar Senha
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
