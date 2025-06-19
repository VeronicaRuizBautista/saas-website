import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users, Globe, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden w-full h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative w-full h-full">
            <img src="../../../public/img/about_equipo.jpg" alt="" />
            <div className="absolute inset-0 bg-[url('../public/img/about-hero.jpg')] bg-center bg-cover"></div>

            {/* Capa con opacidad y degradado */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#050a1c]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl p-4 md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Conoce nuestra historia, valores y el equipo detrás de SaaS Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-[#050a1c]">
        <div className="container mx-auto px-4 w-[90vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Nuestra Historia
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Fundada en 2013, SaaS Solutions nació con la visión de transformar la manera en que las empresas
                interactúan con la tecnología. Lo que comenzó como un pequeño equipo de desarrolladores apasionados, ha
                crecido hasta convertirse en una empresa líder en soluciones tecnológicas.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A lo largo de los años, hemos evolucionado constantemente, adaptándonos a las nuevas tecnologías y
                tendencias del mercado para ofrecer siempre las soluciones más innovadoras y eficientes a nuestros
                clientes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Hoy, con más de una década de experiencia, seguimos comprometidos con nuestra misión original:
                proporcionar soluciones tecnológicas de vanguardia que impulsen el crecimiento y éxito de nuestros
                clientes.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative h-[400px] bg-[#050a1c] rounded-xl overflow-hidden">
                <img
                  src="../../../public/img/inicios.jpg"
                  alt="Equipo de SaaS Solutions"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a1c]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#050a1c]">
        <div className="container mx-auto px-4 w-[90vw]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
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
            <div className="bg-[#050a1c]/50 rounded-xl p-6 border border-purple-900/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
      <section className="py-20 bg-[#050a1c]">
        <div className="container mx-auto px-4 w-[90vw]">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
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
                image: "../../../public/img/member_carlos.jpg?height=400&width=400",
              },
              {
                name: "Laura Martínez",
                position: "CTO",
                image: "../../../public/img/member_laura.jpg?height=400&width=400",
              },
              {
                name: "Miguel Sánchez",
                position: "Lead Developer",
                image: "../../../public/img/member_miguel.jpg?height=400&width=400",
              },
              {
                name: "Ana García",
                position: "UX/UI Designer",
                image: "../../../public/img/member_ana.jpg?height=400&width=400",
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
      <section className="py-20 bg-gradient-to-b from-black to-blue-600/10 bg-[#050a1c]">
          <div className="max-w-4xl mx-auto ">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Nuestra Trayectoria</h3>

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
                      <p className="text-gray-400">Fundación de la empresa</p>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <p className="text-gray-300">
                          Comenzamos nuestro viaje con un pequeño equipo de desarrolladores apasionados.
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
                          Expandimos nuestros servicios para incluir desarrollo de aplicaciones móviles.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">2016</h4>
                      <p className="text-gray-400">Expansión de servicios</p>
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
                          Incorporamos soluciones de inteligencia artificial y chatbots a nuestro catálogo.
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
                          Actualmente, seguimos innovando y ofreciendo soluciones tecnológicas de vanguardia.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-2 order-1">
                      <h4 className="text-xl font-bold text-white">Hoy</h4>
                      <p className="text-gray-400">Innovación continua</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#050a1c] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050a1c] via-[#050a1c] to-transparent"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
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