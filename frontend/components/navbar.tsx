import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RymeiLogo } from "./rymei-logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-teal-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RymeiLogo className="h-8 w-auto" />
          <span className="text-xl font-bold text-teal-700 hidden sm:inline-block">
            Rymei
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-teal-700 hover:text-teal-500 font-medium">
            Dashboard
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500 font-medium">
            Relatórios
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500 font-medium">
            Configurações
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden sm:flex border-teal-200 text-teal-700 hover:bg-teal-50"
          >
            Ajuda
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
            Minha Conta
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
