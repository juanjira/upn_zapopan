import { Badge } from "@/components/ui/badge";
import MapComponent from "@/components/MapComponent";

import home from "@/assets/event-2.jpg";
import Programs from "@/pages/Programs";
import About from "./About";
import News from "./News";
import FaceBook from "./FaceBook";
import Touch from "./Contact";
import Footer from "./Footer";
import { Nav } from "./Nav";

export default function Home() {

  return (
    <div className="min-h-screen overflow-hidden max-w-full bg-white ">
      <Nav separator="#" />
      {/* HOME Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
                  backgroundImage: `url(${home})`
                }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FB0149]/30 via-[#9C1882]/50 to-[#542AAE]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm">
              🎓 Excelencia Educativa desde 1978
            </Badge>
            <h2 className="text-base md:text-4xl font-bold text-white mb-6 leading-tight">
              
              <span className="text-[#FB0149] text-shadow-lg/90 text-shadow-white">
                 Formamos profesionales de la educación comprometidos con la transformación social 
                y el desarrollo integral de la persona.
              </span> 
             
            </h2>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl"
              >
                Conoce Nuestros Programas
                <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm"
              >
                Solicita Información
              </Button>
            </div> */}
          </div>
        </div>

      </section>

      <Programs />
      <About />
      <News />  
      <FaceBook />
      <Touch />
      <MapComponent />
      <Footer />
    </div>
  );
}
