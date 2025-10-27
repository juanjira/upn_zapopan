
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  GraduationCap, 
  Users, 
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
  Globe,
  Briefcase,
  Target,
  TrendingUp,
  Facebook,
  MessageCircle,
  Share2,
  ThumbsUp,
  Send,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MapComponent from "@/components/MapComponent";

import logo from '../img/logo_ok.png'
import campus from '../assets/upn145.webp'
import home from "@/assets/event-2.jpg";
import Banner from "@/components/Banner";
import BlurText from "@/components/BlurText";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

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

  const stats = [
    { numero: "3,500+", label: "Estudiantes Activos", icono: <Users className="w-6 h-6" /> },
    { numero: "25+", label: "Años de Experiencia", icono: <Award className="w-6 h-6" /> },
    { numero: "95%", label: "Índice de Titulación", icono: <TrendingUp className="w-6 h-6" /> },
    { numero: "120+", label: "Convenios Activos", icono: <Globe className="w-6 h-6" /> }
  ];

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

   const horarios = [
    { dia: "Lunes - Viernes", horario: "8:00 AM - 8:00 PM" },
    { dia: "Sábado", horario: "8:00 AM - 3:00 PM" },
    { dia: "Domingo", horario: "Cerrado" }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              {["Inicio", "Programas", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
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
                {["Inicio", "Programas", "Nosotros", "Contacto"].map((item) => (
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

      {/* HOME Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* Stats Section */}
      <section id="programas" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 text-white shadow-lg">
                  {stat.icono}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.numero}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas Section */}
      <section id="admision" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div                        
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
              Oferta Educativa
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Programas Académicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Programas de licenciatura y posgrado diseñados para formar líderes educativos del futuro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programas.map((programa, index) => (
              <div
                key={index}
              >
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
                      <Badge variant="secondary" className="bg-gray-100">
                        <Calendar className="w-3 h-3 mr-1" />
                        {programa.duracion}
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100">
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

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
                Nuestra Institución
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Liderando la Educación en Guadalajara
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                La Universidad Pedagógica Nacional Unidad 145 es una institución de educación superior 
                pública, comprometida con la formación de profesionales de la educación de excelencia.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Misión</h4>
                    <p className="text-gray-600">
                      Formar profesionales de la educación con una sólida preparación académica, 
                      científica y humanística.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Visión</h4>
                    <p className="text-gray-600">
                      Ser la institución líder en la formación de educadores, reconocida por su 
                      excelencia académica e impacto social.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Conoce Más Sobre Nosotros
              </Button>
            </div>

            <div
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img                  
                  src={campus}
                  alt="Campus"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Noticias Section */}
      <section className="py-24 bg-white">
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

      {/* Comunidad Facebook Section - NUEVA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl mb-6 shadow-2xl">
              <Facebook className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Únete a Nuestra Comunidad
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
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Más de 5,000 Miembros
                    </h3>
                    <p className="text-gray-600">
                      Estudiantes, egresados y docentes conectados
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Share2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Comparte Experiencias</h4>
                        <p className="text-sm text-gray-600">Intercambia ideas y conocimientos con la comunidad</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Eventos Exclusivos</h4>
                        <p className="text-sm text-gray-600">Entérate de eventos, talleres y conferencias</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Networking</h4>
                        <p className="text-sm text-gray-600">Conecta con profesionales y expande tu red</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="https://www.facebook.com/groups/1222132301479847" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                      <Facebook className="w-5 h-5 mr-2" />
                      Únete al Grupo de Facebook
                    </Button>
                  </a>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Es gratis y toma solo un momento
                  </p>
                </CardContent>
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

      {/* Contacto Section - NUEVA */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
              Estamos Aquí Para Ti
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes preguntas? Nos encantaría escucharte. Completa el formulario o visítanos en nuestras instalaciones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div>
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nombre" className="text-gray-700 font-medium mb-2 block">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        placeholder="Tu nombre completo"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="tu@email.com"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-gray-700 font-medium mb-2 block">
                        Teléfono
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="(33) 1234-5678"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mensaje" className="text-gray-700 font-medium mb-2 block">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleTextAreaChange}
                        required
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        className="min-h-32"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Información de Contacto y Mapa */}
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="grid gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Dirección</h4>                        
                        <BlurText
                          text="Luis Manuel Rojas No. 2001 
                                C.P 45180, Colonia La Palmita, Zapopan, Jalisco, México"
                          delay={150}
                          animateBy="words"
                          direction="top"                            
                          className="text-gray-600"
                        />                          
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Teléfono</h4>
                        <p className="text-gray-600">
                          3336604850 / 3336664430
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                        <p className="text-gray-600">
                          lidiana.nieves@jaliscoedu.mx
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Horarios de Atención</h4>
                        <div className="space-y-1 text-gray-600">
                          {horarios.map((horario, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="font-medium">{horario.dia}:</span>
                              <span>{horario.horario}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <MapComponent />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">UPN 145</h3>
                  <p className="text-sm text-gray-400">Zapopan</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Formando educadores de excelencia desde 1978
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {["Inicio", "Programas", "Admisión", "Nosotros", "Contacto"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Programas</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Licenciatura en Pedagogía</li>
                <li>Administración Educativa</li>
                <li>Psicología Educativa</li>
                <li>Maestría en Educación</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    Luis Manuel Rojas No. 2001 <br />
                    C.P 45180, Colonia La Palmita, Zapopan, Jalisco<br />
                    México
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">3336604850 / 3336664430</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">lidiana.nieves@jaliscoedu.mx</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Universidad Pedagógica Nacional. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
