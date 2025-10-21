import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              UPN 145
            </div>
            <div className="hidden md:block text-xs text-muted-foreground">
              Zapopan
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#oferta" className="text-sm font-medium hover:text-primary transition-colors">
              Oferta Educativa
            </a>
            <a href="#admisiones" className="text-sm font-medium hover:text-primary transition-colors">
              Admisiones
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </a>
            <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Moodle
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Inicio
              </a>
              <a href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Nosotros
              </a>
              <a href="#oferta" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Oferta Educativa
              </a>
              <a href="#admisiones" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Admisiones
              </a>
              <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Contacto
              </a>
              <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full">
                Moodle
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
