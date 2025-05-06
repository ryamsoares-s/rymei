// components/navbar.tsx
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RymeiLogo } from "./rymei-logo";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-teal-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <RymeiLogo className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-xl font-bold text-teal-700 hidden sm:inline-block"
          >
            Rymei
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-teal-700 hover:text-teal-500 font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/relatorios"
            className="text-gray-600 hover:text-teal-500 font-medium"
          >
            Relatórios
          </Link>
          <Link
            href="/configuracoes"
            className="text-gray-600 hover:text-teal-500 font-medium"
          >
            Configurações
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/ajuda">
            <Button
              variant="outline"
              className="hidden sm:flex border-teal-200 text-teal-700 hover:bg-teal-50"
            >
              Ajuda
            </Button>
          </Link>
          <Link href="/minha-conta">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Minha Conta
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
