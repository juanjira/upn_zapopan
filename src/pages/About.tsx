import { Button } from "@/components/ui/button";
import { Award, Badge, Target } from "lucide-react";
import campus from '../assets/upn145.webp'

export default function About() {
    
    return (
        <>
        {/* Nosotros Section */}
        <section id="nosotros" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                    
                    <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
                        Nuestra Institución
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Liderando la Educación en Zapopan
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

                    <div className="relative">
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
        </>
    )
}