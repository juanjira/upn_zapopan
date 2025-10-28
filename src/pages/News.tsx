import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, Calendar, ChevronRight } from "lucide-react";

export default function News() {
    const noticias = [
    {
      fecha: "15 Enero 2025",
      titulo: "Inicio del Proceso de Admisión 2025",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
    },
    {
      fecha: "10 Enero 2025",
      titulo: "Convenio de Colaboración Internacional",
      imagen: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
    },
    {
      fecha: "5 Enero 2025",
      titulo: "Conferencia de Innovación Educativa",
      imagen: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&h=600&fit=crop"
    }
  ];

  return (
    <>
      {/* Noticias Section */}
      <section id="eventos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Banner />

          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
              Mantente Informado
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Noticias
            </h2>
          </div>

          

          <div className="grid md:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <div
                key={index}
              >
                
                <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                        <Calendar className="w-3 h-3 mr-1" />
                        {noticia.fecha}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {noticia.titulo}
                    </h3>
                    
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                      Leer más
                      <ChevronRight className="w-4 h-4 ml-1" />                      
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
)
}