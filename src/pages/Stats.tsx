import { Award, Globe, TrendingUp, Users } from "lucide-react";

export default function Stats() {
  
  const stats = [
    { numero: "3,500+", label: "Estudiantes Activos", icono: <Users className="w-6 h-6" /> },
    { numero: "25+", label: "Años de Experiencia", icono: <Award className="w-6 h-6" /> },
    { numero: "95%", label: "Índice de Titulación", icono: <TrendingUp className="w-6 h-6" /> },
    { numero: "120+", label: "Convenios Activos", icono: <Globe className="w-6 h-6" /> }
  ];
  
  return (
    <>
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
    </>)
}