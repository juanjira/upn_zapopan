import { Button } from "@/components/ui/button";
import { Card,CardContent } from "@/components/ui/card"
import { Badge, Calendar, GraduationCap,Briefcase,Users,Award, ChevronRight } from "lucide-react"

export default function Programs() {
    
      const programas = [
        {
        titulo: "Licenciatura en Educación Inicial y Preescolar",
        duracion: "4 años",
        modalidad: "Presencial / En línea",
        descripcion: "Forma profesionales capaces de diseñar, implementar y evaluar proyectos educativos innovadores.",
        icono: <GraduationCap className="w-8 h-8" />,
        color: "from-blue-500 to-indigo-600"
        },
        {
        titulo: "Licenciatura en Educación Primaria ",
        duracion: "4 años",
        modalidad: "Presencial / Mixta",
        descripcion: "Desarrolla líderes en gestión y dirección de instituciones educativas.",
        icono: <Briefcase className="w-8 h-8" />,
        color: "from-purple-500 to-pink-600"
        },
        {
          titulo: "Licenciatura en Educación Secundaria",
          duracion: "4 años",
          modalidad: "Presencial",
          descripcion: "Especialistas en el desarrollo psicológico y procesos de aprendizaje.",
          icono: <Users className="w-8 h-8" />,
          color: "from-emerald-500 to-teal-600"
        },
        {
          titulo: "Licenciatura en Educación Media Superior",
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
          <div className="text-center mb-16">    
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="title-gradient">
                Nuestros Programas Académicos
              </span>
            </h2>
          </div>
          <div className="flex gap-12 mb-2 flex-col md:flex-row">
            <div>
              <h3 className="title">PROPÓSITO GENERAL DE LAS LICENCIATURAS: </h3>
              <p className="desc">
                Profesionalizar a las y los docentes en servicio de la educación inicial, preescolar, primaria, secundaria y media superior, a través de la resignificación de su práctica profesional para la toma de decisiones de forma crítica e innovadora, con equidad y pertinencia que impacten en la reconstrucción y transformación de su realidad educativa, atendiendo a las necesidades y los derechos de sus alumnos y a las demandas de un mundo globalizado en constante cambio.   
              </p>
            </div>
            <div>
              <h3 className="title">CARACTERÍSTICAS DEL PROGRAMA DE ESTUDIOS</h3>
              <p className="desc">
                La estructura curricular de cada Licenciatura está integrada por un catálogo de módulos que el estudiante analizará en un módulo de inducción (requisito de ingreso), con el propósito de construir su trayecto formativo. En dicho módulo el docente explicitará sus saberes profesionales, sus principales necesidades de formación, las problemáticas o situaciones conflictivas a las que se enfrenta en su práctica docente; asimismo, examinará el modelo de formación de la Licenciatura, la malla curricular y los ejes problemáticos de cada módulo. 
                El estudiante de la Licenciatura, conforme avance en su proceso de formación podrá modificar en función de sus problemáticas docentes, su trayecto formativo. Del catálogo de módulos, el estudiante seleccionará de uno a tres módulos por cuatrimestre. 
              </p>
            </div>
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
