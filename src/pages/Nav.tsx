import { useState,useEffect } from 'react'
import logo from '../img/logo_ok.png'
import { Button } from '@/components/ui/button';
import { Menu,X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = ({separator}) => {
    
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
    {/* Navegación */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gradient-to-br from-[#9C1882] to-[#542AAE]/60 backdrop-blur-lg shadow-xl" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-stone-100 to-stone-300 rounded-xl flex items-center justify-center shadow-lg">
                <img src={logo} alt="UPN 145" className="w-12"/>
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors text-shadow-lg/70 ${
                  scrolled ? "text-[#FB0149] " : "text-white"
                }`}>
                  UPN 145 Zapopan
                </h1>
                <p className={`text-xl transition-colors text-shadow-lg/30 text-shadow-[#9C1882] ${
                  scrolled ? "text-white/90" : "text-white/90"
                }`}>
                  Universidad Pedagógica
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["Inicio", "Programas", "Nosotros", "Eventos" , "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`${separator}${item.toLowerCase()}`}
                  className={`font-medium transition-all hover:scale-105 text-shadow-lg/30 ${
                    scrolled 
                      ? "text-[#FFF] hover:text-[#FB0149]" 
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {item}
                </a>
              ))}
              
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                Inscríbete Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? "text-gray-900" : "text-white"} />
              ) : (
                <Menu className={scrolled ? "text-gray-900" : "text-white"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-xl"
            >
              <div className="px-4 py-6 space-y-4">
                {["Inicio", "Programas", "Nosotros","Eventos", "Contacto"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  Inscríbete Ahora
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
