import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users, Globe, CheckCircle } from "lucide-react"

export default function AboutPage() {
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
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Conoce nuestra historia, valores y el equipo detrás de SaaS Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Nuestra Historia
              </h2>
              <p className="text-gray-300 mb-4">
                Fundada en 2013, SaaS Solutions nació con la visión de transformar la manera en que las empresas
                interactúan con la tecnología. Lo que comenzó como un pequeño equipo de desarrolladores apasionados, ha
                crecido hasta convertirse en una empresa líder en soluciones tecnológicas.
              </p>
              <p className="text-gray-300 mb-4">
                A lo largo de los años, hemos evolucionado constantemente, adaptándonos a las nuevas tecnologías y
                tendencias del mercado para ofrecer siempre las soluciones más innovadoras y eficientes a nuestros
                clientes.
              </p>
              <p className="text-gray-300">
                Hoy, con más de una década de experiencia, seguimos comprometidos con nuestra misión original:
                proporcionar soluciones tecnológicas de vanguardia que impulsen el crecimiento y éxito de nuestros
                clientes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Equipo de SaaS Solutions"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestros Valores
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y relaciones con los clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excelencia</h3>
              <p className="text-gray-400">
                Nos esforzamos por alcanzar la excelencia en cada proyecto, prestando atención a cada detalle para
                garantizar resultados excepcionales.
              </p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Colaboración</h3>
              <p className="text-gray-400">
                Creemos en el poder del trabajo en equipo y la colaboración estrecha con nuestros clientes para crear
                soluciones que realmente satisfagan sus necesidades.
              </p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovación</h3>
              <p className="text-gray-400">
                Estamos constantemente explorando nuevas tecnologías y metodologías para ofrecer soluciones innovadoras
                que marquen la diferencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestro Equipo
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profesionales apasionados y altamente cualificados que hacen posible nuestra misión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Rodríguez",
                position: "CEO & Fundador",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Laura Martínez",
                position: "CTO",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Miguel Sánchez",
                position: "Lead Developer",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Ana García",
                position: "UX/UI Designer",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-400">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestra Trayectoria
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Un viaje de crecimiento, innovación y éxito.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">2013</h4>
                      <p className="text-gray-400">Fundación</p>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Fundación de SaaS Solutions con un equipo inicial de 5 desarrolladores.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 order-2">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Primer gran proyecto para una empresa internacional. Expansión del equipo.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">2015</h4>
                      <p className="text-gray-400">Primer hito importante</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">2016</h4>
                      <p className="text-gray-400">Expansión de servicios</p>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Incorporación de servicios de desarrollo de aplicaciones móviles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 order-2">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">Apertura de nuevas oficinas y expansión internacional.</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">2018</h4>
                      <p className="text-gray-400">Expansión internacional</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">2020</h4>
                      <p className="text-gray-400">Integración de IA</p>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Incorporación de soluciones de inteligencia artificial y chatbots.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1 order-2">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">Reconocimiento como empresa líder en soluciones tecnológicas.</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">2023</h4>
                      <p className="text-gray-400">Premio a la innovación</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-white">Hoy</h4>
                      <p className="text-gray-400">Innovación continua</p>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Seguimos innovando y ofreciendo soluciones tecnológicas de vanguardia.
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
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              ¿Quieres formar parte de nuestra historia?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
            >
              <Link to="/contact">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}