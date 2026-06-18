import { Link } from 'react-router'
import {
  DraftingCompass,
  Wrench,
  Building2,
  Bolt,
  Cog,
  ClipboardCheck,
} from 'lucide-react'

const services = [
  {
    title: 'Estudio de ingeniería y ejecución de proyectos',
    description:
      'Desarrollo y ejecución de proyectos orientados a soluciones técnicas industriales.',
    icon: DraftingCompass,
  },

  {
    title: 'Mantenimiento industrial',
    description:
      'Servicios de mantenimiento para garantizar continuidad operativa y eficiencia.',
    icon: Wrench,
  },

  {
    title: 'Estructuras metalmecánicas',
    description:
      'Diseño, fabricación e implementación de estructuras para distintos entornos industriales.',
    icon: Building2,
  },

  {
    title: 'Servicios eléctricos e instrumentación',
    description:
      'Instalación, soporte e integración de sistemas eléctricos e instrumentación.',
    icon: Bolt,
  },

  {
    title: 'Diseño e ingeniería aplicada',
    description:
      'Desarrollo de propuestas técnicas adaptadas a cada necesidad del proyecto.',
    icon: Cog,
  },

  {
    title: 'Supervisión y soporte técnico',
    description:
      'Seguimiento, coordinación y asistencia técnica durante la ejecución.',
    icon: ClipboardCheck,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Servicios
          </span>

          <h2 className="text-4xl font-bold text-blue-950 mt-3">
            Soluciones Integrales para la Industria
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Brindamos servicios especializados en ingeniería,
            mantenimiento y ejecución de proyectos con calidad,
            compromiso y enfoque en resultados.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                  <Icon
                    size={30}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="
              inline-flex
              px-8
              py-4
              rounded-xl
              bg-blue-900
              text-white
              font-semibold
              hover:bg-blue-800
              transition
            "
          >
            Ver Todos los Servicios
          </Link>
        </div>

      </div>
    </section>
  )
}
