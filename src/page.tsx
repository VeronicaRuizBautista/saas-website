import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Code, Database, Bot, CheckCircle, Clock, Users, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('../public/img/fondo_programacion1Editado.jpg?height=800&width=800')] bg-left-top "></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Transformamos Ideas en Soluciones Digitales
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Desarrollo de software a medida, páginas web, e-commerce, aplicaciones, bases de datos y soluciones de IA
              para impulsar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="h-[5vh] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
              >
                <Link to="/contact">Solicitar Presupuesto</Link>
              </button>
              <button
                className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8"
              >
                <Link to="/services">Explorar Servicios</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestros Conocimientos y Tecnologías
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Utilizamos las tecnologías más avanzadas para crear soluciones robustas, escalables y de alto rendimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Desarrollo Web</h3>
              <p className="text-gray-400 mb-4">React, Next.js, Vue, Angular, Node.js, Express, Django, Laravel</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vue", "Node.js"].map((tech) => (
                  <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bases de Datos</h3>
              <p className="text-gray-400 mb-4">MongoDB, PostgreSQL, MySQL, Firebase, Redis, Supabase</p>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "MySQL", "Firebase"].map((tech) => (
                  <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">IA y Chatbots</h3>
              <p className="text-gray-400 mb-4">OpenAI, TensorFlow, PyTorch, Dialogflow, Rasa, Langchain</p>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "TensorFlow", "PyTorch", "Dialogflow"].map((tech) => (
                  <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Más de 10 años de experiencia creando soluciones digitales para empresas de todos los tamaños.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Calidad Garantizada</h3>
              <p className="text-gray-400">
                Todos nuestros proyectos pasan por rigurosos controles de calidad para garantizar un producto final
                excepcional.
              </p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Entrega Puntual</h3>
              <p className="text-gray-400">
                Nos comprometemos a entregar los proyectos en el tiempo acordado, respetando los plazos establecidos.
              </p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Equipo Experto</h3>
              <p className="text-gray-400">
                Contamos con un equipo de profesionales altamente cualificados y especializados en diferentes áreas
                tecnológicas.
              </p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Soporte Continuo</h3>
              <p className="text-gray-400">
                Ofrecemos soporte técnico continuo después de la entrega del proyecto para garantizar su correcto
                funcionamiento.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20 max-w-4xl mx-auto">
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
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
            >
              <Link to="/contact">Contáctanos</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

