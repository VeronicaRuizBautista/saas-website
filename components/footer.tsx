import Link from "next/link"
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <div className="absolute inset-0.5 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                SaaS Solutions
              </span>
            </div>
            <p className="text-gray-400 text-sm">Soluciones tecnológicas innovadoras para empresas modernas.</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Páginas Web
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Aplicaciones
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Bases de Datos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Chatbots e IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-400">info@saassolutions.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-400">+34 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} SaaS Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

