import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Server, Shield, BarChart } from "lucide-react"

export default function ServicesPage() {
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
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Soluciones tecnológicas a medida para impulsar tu negocio al siguiente nivel.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Desarrollo Web
              </h2>
              <p className="text-gray-300 mb-6">
                Creamos sitios web modernos, responsivos y optimizados para buscadores que destacan tu marca y mejoran
                la experiencia de usuario.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Sitios web corporativos</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Landing pages de alto rendimiento</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Blogs y portales de contenido</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Aplicaciones web progresivas (PWA)</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                <Link to="/contact">Solicitar Información</Link>
              </button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Desarrollo Web"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="E-commerce"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                E-commerce
              </h2>
              <p className="text-gray-300 mb-6">
                Desarrollamos tiendas online potentes y seguras que maximizan tus ventas y ofrecen una experiencia de
                compra excepcional.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Tiendas online personalizadas</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Integración con pasarelas de pago</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Gestión de inventario y pedidos</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Optimización para conversión</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                <Link to="/contact">Solicitar Información</Link>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Desarrollo de Aplicaciones
              </h2>
              <p className="text-gray-300 mb-6">
                Creamos aplicaciones móviles y web a medida que resuelven problemas específicos y mejoran la eficiencia
                de tu negocio.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Aplicaciones móviles nativas (iOS y Android)</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Aplicaciones híbridas multiplataforma</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Aplicaciones web empresariales</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Integración con APIs y servicios externos</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                <Link to="/contact">Solicitar Información</Link>
              </button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Desarrollo de Aplicaciones"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Bases de Datos"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Bases de Datos
              </h2>
              <p className="text-gray-300 mb-6">
                Diseñamos y gestionamos bases de datos eficientes y seguras que garantizan la integridad y
                disponibilidad de tu información.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Diseño y modelado de bases de datos</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Migración y optimización</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Administración y mantenimiento</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Soluciones en la nube y on-premise</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                <Link to="/contact">Solicitar Información</Link>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Chatbots e Inteligencia Artificial
              </h2>
              <p className="text-gray-300 mb-6">
                Implementamos soluciones de IA y chatbots que automatizan procesos, mejoran la atención al cliente y
                optimizan la toma de decisiones.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Chatbots para atención al cliente</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Sistemas de recomendación</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Análisis predictivo</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <span className="text-gray-300">Automatización de procesos</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                <Link to="/contact">Solicitar Información</Link>
              </button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Chatbots e IA"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Servicios Adicionales
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complementamos nuestras soluciones principales con servicios adicionales para cubrir todas tus necesidades
              tecnológicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hosting y Servidores</h3>
              <p className="text-gray-400 mb-4">
                Soluciones de alojamiento web y servidores optimizados para garantizar el rendimiento y la
                disponibilidad de tus aplicaciones.
              </p>
              <button  className="w-full border-gray-700 text-white hover:bg-gray-800">
                <Link to="/contact">Más Información</Link>
              </button>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ciberseguridad</h3>
              <p className="text-gray-400 mb-4">
                Protegemos tus activos digitales con soluciones de seguridad avanzadas que previenen y mitigan amenazas
                cibernéticas.
              </p>
              <button  className="w-full border-gray-700 text-white hover:bg-gray-800">
                <Link to="/contact">Más Información</Link>
              </button>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analítica de Datos</h3>
              <p className="text-gray-400 mb-4">
                Transformamos tus datos en información valiosa para la toma de decisiones estratégicas y la optimización
                de procesos.
              </p>
              <button className="w-full border-gray-700 text-white hover:bg-gray-800">
                <Link to="/contact">Más Información</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestro Proceso
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Un enfoque estructurado y colaborativo para garantizar el éxito de tu proyecto.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {/* Process steps */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">Consulta Inicial</h4>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Analizamos tus necesidades y objetivos para entender completamente tu proyecto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 order-2">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Desarrollamos una propuesta detallada con alcance, plazos y presupuesto.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">Planificación</h4>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">Diseño</h4>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Creamos prototipos y maquetas para visualizar el producto final antes del desarrollo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 order-2">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Implementamos la solución utilizando metodologías ágiles y las mejores prácticas.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">Desarrollo</h4>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">Pruebas</h4>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Realizamos pruebas exhaustivas para garantizar la calidad y el rendimiento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 order-2">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Implementamos la solución en producción y te acompañamos en el lanzamiento.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">Implementación</h4>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">Soporte</h4>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Ofrecemos soporte continuo y mantenimiento para garantizar el éxito a largo plazo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos hoy mismo para discutir tu proyecto y recibir una consulta gratuita.
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
            >
              <Link to="/contact">Solicitar Presupuesto</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

