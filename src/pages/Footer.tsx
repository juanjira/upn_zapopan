import { MapPin, Phone, Mail } from "lucide-react";
import logo from '../img/logo_ok.png'

export default function Footer() {
    return(
        <>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">                    
                        <img src={logo} alt="UPN 145" className="w-12"/>
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
        </>
    )
}