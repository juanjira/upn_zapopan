
import { Card, CardContent } from "@/components/ui/card"
import { Badge,  Facebook, MessageCircle, ThumbsUp} from "lucide-react"

export default function FaceBook() {

    const actividadesFacebook = [
            {
            tipo: "Evento",
            titulo: "Webinar: Estrategias de Enseñanza Digital",
            fecha: "Hace 2 horas",
            reacciones: 45,
            comentarios: 12
            },
            {
            tipo: "Anuncio",
            titulo: "Convocatoria para Becas de Excelencia 2025",
            fecha: "Hace 5 horas",
            reacciones: 128,
            comentarios: 34
            },
            {
            tipo: "Publicación",
            titulo: "Felicitaciones a nuestros graduados de la generación 2024",
            fecha: "Hace 1 día",
            reacciones: 256,
            comentarios: 67
            }
        ];

  return (
    <>
      {/* Comunidad Facebook Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl mb-6 shadow-2xl">
              <Facebook className="w-10 h-10 text-blue-600" />              
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="title-gradient">
                Únete a Nuestra Comunidad
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Forma parte del grupo de Facebook de UPN 145 y mantente conectado con estudiantes, 
              profesores y eventos de la universidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Actividad Reciente */}
            <div>
              
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Actividad Reciente
                  </h3>
                  <div className="space-y-4">
                    {actividadesFacebook.map((actividad, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className="bg-blue-500 text-white border-0">
                            {actividad.tipo}
                          </Badge>                          
                          <span className="text-sm text-white/70">{actividad.fecha}</span>
                        </div>
                        <h4 className="text-white font-semibold mb-3">{actividad.titulo}</h4>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />                            
                            {actividad.reacciones}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {actividad.comentarios}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA para unirse */}
            <div className="flex flex-col justify-center">
              <Card className="bg-white shadow-2xl border-0">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F1222132301479847&tabs=timeline&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=847499914480735" 
                  width="0" 
                  height="0"                    
                  className="border-0 overflow-hidden"
                  scrolling="no" 
                  frameborder="0" 
                  allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </Card>
            </div>
          </div>

          {/* Testimonios de la comunidad */}
          <div className="text-center">
            <p className="text-white/90 text-lg italic max-w-3xl mx-auto">
              "El grupo de Facebook de UPN 145 ha sido fundamental para mantenerme informado y conectado 
              con la comunidad universitaria. ¡Totalmente recomendado!"
            </p>
            <p className="text-white/70 mt-4">- María González, Estudiante de Pedagogía</p>
          </div>
        </div>
      </section>
    </>
    )
}