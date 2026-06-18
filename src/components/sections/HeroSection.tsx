import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white">
              Aplicando Ingeniería en Proyectos y Mantenimiento
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 text-pretty leading-relaxed">
              Desarrollamos proyectos de ingeniería y brindamos servicios especializados en mantenimiento, estructuras y soporte técnico con compromiso, calidad y precisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
              >
                Explorar Servicios
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Empieze un Proyecto
              </Link>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur p-6 rounded-lg border border-blue-700 hover:border-orange-500 transition-colors">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <p className="text-blue-100">Trabajos completados</p>
            </div>
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur p-6 rounded-lg border border-blue-700 hover:border-orange-500 transition-colors">
              <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
              <p className="text-blue-100">Satisfacción de nuestros clientes</p>
            </div>
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur p-6 rounded-lg border border-blue-700 hover:border-orange-500 transition-colors">
              <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
              <p className="text-blue-100">Miembros de equipo experto</p>
            </div>
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur p-6 rounded-lg border border-blue-700 hover:border-orange-500 transition-colors">
              <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
              <p className="text-blue-100">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
