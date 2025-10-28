import { Button } from "@/components/ui/button";
import { Card,CardContent } from "@/components/ui/card"
import { Badge, Calendar, GraduationCap,Briefcase,Users,Award, ChevronRight } from "lucide-react"

export default function Programs() {
    
      const programas = [
        {
        titulo: "Licenciatura en Pedagogía",
        duracion: "4 años",
        modalidad: "Presencial / En línea",
        descripcion: "Forma profesionales capaces de diseñar, implementar y evaluar proyectos educativos innovadores.",
        icono: <GraduationCap className="w-8 h-8" />,
        color: "from-blue-500 to-indigo-600"
        },
        {
        titulo: "Licenciatura en Administración Educativa",
        duracion: "4 años",
        modalidad: "Presencial / Mixta",
        descripcion: "Desarrolla líderes en gestión y dirección de instituciones educativas.",
        icono: <Briefcase className="w-8 h-8" />,
        color: "from-purple-500 to-pink-600"
        },
        {
        titulo: "Licenciatura en Psicología Educativa",
        duracion: "4 años",
        modalidad: "Presencial",
        descripcion: "Especialistas en el desarrollo psicológico y procesos de aprendizaje.",
        icono: <Users className="w-8 h-8" />,
        color: "from-emerald-500 to-teal-600"
        },
        {
        titulo: "Maestría en Educación",
        duracion: "2 años",
        modalidad: "En línea / Mixta",
        descripcion: "Posgrado de excelencia para la investigación y práctica educativa avanzada.",
        icono: <Award className="w-8 h-8" />,
        color: "from-orange-500 to-red-600"
        }
    ];

    return (    
     <>
      {/* Programas Section */}
      <section id="programas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div                        
            className="text-center mb-16"
          >    
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Programas Académicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Programas de licenciatura y posgrado diseñados para formar líderes educativos del futuro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programas.map((programa, index) => (

              <div key={index}>                
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${programa.color}`} />
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${programa.color} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {programa.icono}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {programa.titulo}
                    </h3>
                    <div className="flex gap-3 mb-4">
                       
                      <Badge className="bg-gray-100">
                        <Calendar className="w-3 h-3 mr-1" />
                        {programa.duracion}
                      </Badge>
                      <Badge className="bg-gray-100">
                        {programa.modalidad}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {programa.descripcion}
                    </p>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group-hover:gap-3 gap-2 transition-all">
                      Más información
                      <ChevronRight className="w-4 h-4" />
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
