import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Badge,Send,Clock,MapPin,Phone,Mail    } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import BlurText from "@/components/BlurText";
import { useState } from "react";


export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    });

    const horarios = [
        { dia: "Lunes - Viernes", horario: "8:00 AM - 8:00 PM" },
        { dia: "Sábado", horario: "8:00 AM - 3:00 PM" },
        { dia: "Domingo", horario: "Cerrado" }
    ];

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

  return (
    <>
      {/* Contacto Section */}
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
    </>
  );
}