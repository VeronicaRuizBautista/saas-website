"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Code,
  ShoppingCart,
  Smartphone,
  Database,
  Bot,
  Calendar,
  User,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

// Mock project data - in a real app, this would come from a database or API
const projectsData = [
  {
    id: "ecommerce-fashion",
    title: "E-commerce de Moda",
    category: "E-commerce",
    client: "Fashion Brand Inc.",
    date: "Marzo 2023",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Tienda online completa para una marca de moda con integración de pasarela de pagos, gestión de inventario y panel de administración personalizado.",
    longDescription:
      "Desarrollamos una plataforma de comercio electrónico completa para Fashion Brand Inc., una marca de moda en expansión que necesitaba una solución robusta para vender sus productos online. La plataforma incluye un catálogo de productos con filtros avanzados, carrito de compras, proceso de pago seguro, gestión de cuentas de usuario, seguimiento de pedidos y un panel de administración personalizado para gestionar productos, inventario, pedidos y clientes.\n\nImplementamos integraciones con múltiples pasarelas de pago, sistemas de envío y herramientas de marketing para proporcionar una experiencia de compra fluida y segura. El diseño responsive garantiza una experiencia óptima en todos los dispositivos.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS", "Redux", "Tailwind CSS"],
    features: [
      "Catálogo de productos con filtros avanzados",
      "Carrito de compras y proceso de pago seguro",
      "Gestión de cuentas de usuario",
      "Panel de administración personalizado",
      "Integración con múltiples pasarelas de pago",
      "Sistema de gestión de inventario",
      "Análisis de datos y reportes",
    ],
    results: [
      "Aumento del 45% en ventas online",
      "Reducción del 30% en tiempo de gestión de inventario",
      "Mejora del 60% en la experiencia de usuario",
      "Incremento del 25% en la tasa de conversión",
    ],
    icon: <ShoppingCart size={24} />,
  },
  {
    id: "banking-app",
    title: "Aplicación Bancaria",
    category: "Aplicación Móvil",
    client: "Digital Bank S.A.",
    date: "Enero 2023",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Aplicación móvil para un banco digital que permite a los usuarios gestionar sus cuentas, realizar transferencias y pagar facturas de forma segura.",
    longDescription:
      "Desarrollamos una aplicación móvil completa para Digital Bank S.A., un banco digital emergente que buscaba ofrecer a sus clientes una experiencia bancaria moderna y segura. La aplicación permite a los usuarios gestionar sus cuentas, realizar transferencias, pagar facturas, solicitar préstamos y acceder a diversos servicios financieros desde cualquier lugar.\n\nImplementamos medidas de seguridad avanzadas, incluyendo autenticación biométrica, encriptación de datos y detección de fraudes en tiempo real. La interfaz intuitiva y el diseño centrado en el usuario garantizan una experiencia fluida y accesible para clientes de todas las edades.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Redux", "JWT", "Biometric Authentication"],
    features: [
      "Gestión de cuentas y tarjetas",
      "Transferencias y pagos",
      "Autenticación biométrica",
      "Notificaciones en tiempo real",
      "Análisis de gastos",
      "Solicitud de préstamos",
      "Localización de cajeros y sucursales",
    ],
    results: [
      "Adopción por el 78% de los clientes en los primeros 3 meses",
      "Reducción del 65% en visitas a sucursales",
      "Aumento del 40% en transacciones digitales",
      "Puntuación de 4.8/5 en tiendas de aplicaciones",
    ],
    icon: <Smartphone size={24} />,
  },
  {
    id: "ai-chatbot",
    title: "Chatbot de Atención al Cliente",
    category: "IA & Chatbots",
    client: "Global Services Corp.",
    date: "Noviembre 2022",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Chatbot inteligente para atención al cliente 24/7, capaz de resolver consultas frecuentes y derivar a agentes humanos cuando es necesario.",
    longDescription:
      "Desarrollamos un chatbot de atención al cliente impulsado por inteligencia artificial para Global Services Corp., una empresa multinacional con un alto volumen de consultas de clientes. El chatbot está disponible 24/7 y puede manejar múltiples consultas simultáneamente en varios idiomas.\n\nUtilizando procesamiento de lenguaje natural avanzado, el chatbot puede entender las consultas de los clientes, proporcionar respuestas precisas a preguntas frecuentes, ayudar con procesos comunes como devoluciones o cambios, y transferir a un agente humano cuando es necesario. El sistema aprende continuamente de las interacciones para mejorar su precisión y eficacia.",
    technologies: ["Python", "TensorFlow", "Dialogflow", "MongoDB", "Node.js", "WebSockets", "NLP"],
    features: [
      "Atención al cliente 24/7",
      "Soporte multilingüe",
      "Procesamiento de lenguaje natural",
      "Integración con sistemas CRM",
      "Transferencia inteligente a agentes humanos",
      "Análisis de sentimiento",
      "Aprendizaje continuo",
    ],
    results: [
      "Reducción del 70% en tiempo de respuesta",
      "Resolución automática del 85% de las consultas",
      "Ahorro de costos operativos del 50%",
      "Aumento del 30% en satisfacción del cliente",
    ],
    icon: <Bot size={24} />,
  },
  {
    id: "real-estate",
    title: "Portal Inmobiliario",
    category: "Desarrollo Web",
    client: "Premium Real Estate",
    date: "Agosto 2022",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Portal web para una agencia inmobiliaria con búsqueda avanzada de propiedades, tours virtuales y sistema de citas para visitas.",
    longDescription:
      "Desarrollamos un portal inmobiliario completo para Premium Real Estate, una agencia inmobiliaria de lujo que buscaba mejorar su presencia digital y optimizar sus procesos de venta. El portal incluye un sistema avanzado de búsqueda y filtrado de propiedades, tours virtuales en 3D, programación de visitas online y herramientas de análisis de mercado.\n\nLa plataforma permite a los usuarios explorar propiedades con detalles completos, ver tours virtuales, comparar opciones, guardar favoritos y contactar directamente con los agentes. Para la agencia, incluye un sistema de gestión de propiedades, seguimiento de clientes potenciales y análisis de rendimiento.",
    technologies: ["React", "Node.js", "MySQL", "Google Maps API", "Three.js", "AWS", "Redux"],
    features: [
      "Búsqueda avanzada de propiedades",
      "Tours virtuales en 3D",
      "Sistema de citas para visitas",
      "Comparador de propiedades",
      "Panel de administración para agentes",
      "Integración con CRM",
      "Análisis de mercado inmobiliario",
    ],
    results: [
      "Aumento del 60% en consultas online",
      "Incremento del 35% en visitas programadas",
      "Reducción del 40% en tiempo de venta",
      "Expansión a nuevos mercados",
    ],
    icon: <Code size={24} />,
  },
  {
    id: "inventory-system",
    title: "Sistema de Gestión de Inventario",
    category: "Bases de Datos",
    client: "Retail Chain Corp.",
    date: "Mayo 2022",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Sistema completo para la gestión de inventario de una cadena de tiendas, con sincronización en tiempo real y análisis de datos.",
    longDescription:
      "Desarrollamos un sistema integral de gestión de inventario para Retail Chain Corp., una cadena de tiendas con múltiples sucursales que necesitaba optimizar sus procesos logísticos. El sistema permite la gestión centralizada del inventario con sincronización en tiempo real entre todas las sucursales, automatización de pedidos, seguimiento de productos y análisis predictivo para optimizar el stock.\n\nImplementamos una arquitectura robusta que garantiza la disponibilidad y consistencia de los datos incluso en condiciones de conectividad limitada. El sistema incluye módulos para gestión de proveedores, control de calidad, alertas automáticas y generación de informes detallados para la toma de decisiones.",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Elasticsearch"],
    features: [
      "Gestión centralizada de inventario",
      "Sincronización en tiempo real",
      "Automatización de pedidos",
      "Análisis predictivo de stock",
      "Gestión de proveedores",
      "Alertas y notificaciones",
      "Informes y análisis de datos",
    ],
    results: [
      "Reducción del 40% en roturas de stock",
      "Optimización del 25% en niveles de inventario",
      "Ahorro del 35% en costos logísticos",
      "Mejora del 50% en tiempo de procesamiento",
    ],
    icon: <Database size={24} />,
  },
  {
    id: "health-app",
    title: "Aplicación de Salud",
    category: "Aplicación Móvil",
    client: "HealthTech Solutions",
    date: "Febrero 2022",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Aplicación móvil para el seguimiento de la salud y bienestar, con integración de dispositivos wearables y recomendaciones personalizadas.",
    longDescription:
      "Desarrollamos una aplicación móvil integral de salud y bienestar para HealthTech Solutions, una startup innovadora en el sector de la salud digital. La aplicación permite a los usuarios realizar un seguimiento completo de su salud, incluyendo actividad física, nutrición, sueño, signos vitales y medicación.\n\nImplementamos integraciones con diversos dispositivos wearables y sensores de salud para recopilar datos en tiempo real. Utilizando algoritmos de inteligencia artificial, la aplicación proporciona recomendaciones personalizadas, detecta patrones y anomalías, y ayuda a los usuarios a establecer y alcanzar objetivos de salud.",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "TensorFlow Lite", "HealthKit", "Google Fit"],
    features: [
      "Seguimiento de actividad física",
      "Monitoreo de signos vitales",
      "Registro de nutrición y dieta",
      "Análisis de patrones de sueño",
      "Recordatorios de medicación",
      "Recomendaciones personalizadas",
      "Integración con dispositivos wearables",
    ],
    results: [
      "Más de 500,000 descargas en 6 meses",
      "Retención de usuarios del 75%",
      "Mejora promedio del 40% en hábitos de salud",
      "Puntuación de 4.7/5 en tiendas de aplicaciones",
    ],
    icon: <Smartphone size={24} />,
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState("")

  useEffect(() => {
    if (params.id) {
      const foundProject = projectsData.find((p) => p.id === params.id)
      if (foundProject) {
        setProject(foundProject)
        setActiveImage(foundProject.mainImage)
      } else {
        router.push("/portfolio")
      }
    }
    setLoading(false)
  }, [params.id, router])

  if (loading || !project) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

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
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={() => router.push("/portfolio")}
            >
              <ArrowLeft className="mr-2" size={16} />
              Volver al portafolio
            </Button>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full flex items-center space-x-1 mt-4 md:mt-0">
              {project.icon}
              <span className="ml-1">{project.category}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xl text-gray-300 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <User size={18} className="mr-2" />
                  <span>Cliente: {project.client}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={18} className="mr-2" />
                  <span>Fecha: {project.date}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech: string, index: number) => (
                  <span key={index} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                <Link href="/contact" className="flex items-center">
                  Solicitar un proyecto similar
                  <ExternalLink size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden border border-gray-800 h-[500px]">
              <Image src={activeImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {project.gallery.map((image: string, index: number) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 h-24 ${activeImage === image ? "border-blue-500 scale-105" : "border-gray-800 hover:border-gray-600"}`}
                onClick={() => setActiveImage(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Descripción del Proyecto
              </h2>

              {project.longDescription.split("\n\n").map((paragraph: string, index: number) => (
                <p key={index} className="text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Code size={20} className="mr-2 text-blue-400" />
                  Características
                </h3>

                <ul className="space-y-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-green-400">✓</div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle size={20} className="mr-2 text-blue-400" />
                  Resultados
                </h3>

                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-green-400">✓</div>
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
            Proyectos Relacionados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link href={`/portfolio/${relatedProject.id}`} key={relatedProject.id}>
                  <div className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1">
                        {relatedProject.icon}
                        <span className="ml-1">{relatedProject.category}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400 mb-4 flex-grow line-clamp-2">{relatedProject.description}</p>
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
              ¿Te gustaría un proyecto similar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos hoy mismo y hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
            >
              <Link href="/contact">Solicitar Presupuesto</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

