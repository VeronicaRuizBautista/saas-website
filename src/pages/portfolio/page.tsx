import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Code, ShoppingCart, Smartphone, Database, Bot } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const projects = [
    {
      id: "ecommerce-fashion",
      title: "E-commerce de Moda",
      category: "E-commerce",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Tienda online completa para una marca de moda con integración de pasarela de pagos, gestión de inventario y panel de administración personalizado.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      icon: <ShoppingCart size={24} />,
    },
    {
      id: "banking-app",
      title: "Aplicación Bancaria",
      category: "Aplicación Móvil",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Aplicación móvil para un banco digital que permite a los usuarios gestionar sus cuentas, realizar transferencias y pagar facturas de forma segura.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      icon: <Smartphone size={24} />,
    },
    {
      id: "ai-chatbot",
      title: "Chatbot de Atención al Cliente",
      category: "IA & Chatbots",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Chatbot inteligente para atención al cliente 24/7, capaz de resolver consultas frecuentes y derivar a agentes humanos cuando es necesario.",
      technologies: ["Python", "TensorFlow", "Dialogflow", "MongoDB"],
      icon: <Bot size={24} />,
    },
    {
      id: "real-estate",
      title: "Portal Inmobiliario",
      category: "Desarrollo Web",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Portal web para una agencia inmobiliaria con búsqueda avanzada de propiedades, tours virtuales y sistema de citas para visitas.",
      technologies: ["React", "Node.js", "MySQL", "Google Maps API"],
      icon: <Code size={24} />,
    },
    {
      id: "inventory-system",
      title: "Sistema de Gestión de Inventario",
      category: "Bases de Datos",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Sistema completo para la gestión de inventario de una cadena de tiendas, con sincronización en tiempo real y análisis de datos.",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
      icon: <Database size={24} />,
    },
    {
      id: "health-app",
      title: "Aplicación de Salud",
      category: "Aplicación Móvil",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Aplicación móvil para el seguimiento de la salud y bienestar, con integración de dispositivos wearables y recomendaciones personalizadas.",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      icon: <Smartphone size={24} />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-center opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Nuestro Portafolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Descubre algunos de nuestros proyectos más destacados y cómo hemos ayudado a nuestros clientes a alcanzar
              sus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link href={`/portfolio/${project.id}`} key={project.id}>
                <div className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1">
                      {project.icon}
                      <span className="ml-1">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <span className="text-blue-400 flex items-center text-sm font-medium group-hover:text-blue-300 transition-colors">
                        Ver detalles
                        <ExternalLink size={14} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              ¿Listo para crear tu próximo proyecto?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos hoy mismo y convierte tu idea en realidad con nuestro equipo de expertos.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
            >
              <Link href="/contact">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

