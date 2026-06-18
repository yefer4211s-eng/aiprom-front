
import {
  DraftingCompass,
  Wrench,
  Building2,
  Bolt,
  Cog,
  ClipboardCheck,
  Factory,
  HardHat,
} from 'lucide-react'

const allServices = [

  {
    icon: DraftingCompass,
    title: 'Estudio de Ingeniería y Ejecución de Proyectos',
    description:
      'Desarrollo integral de proyectos industriales desde la etapa de ingeniería hasta la ejecución.',

    details:
      'Elaboración de estudios técnicos, planificación, supervisión y ejecución de proyectos adaptados a las necesidades del cliente.',
  },

  {
    icon: Wrench,
    title: 'Mantenimiento Industrial',

    description:
      'Servicios de mantenimiento preventivo, correctivo y mejora continua.',

    details:
      'Intervención en plantas industriales y sistemas mecánicos para asegurar continuidad operativa.',
  },

  {
    icon: Building2,

    title: 'Estructuras Metalmecánicas',

    description:
      'Diseño, fabricación e instalación de estructuras metálicas.',

    details:
      'Construcción y montaje de estructuras orientadas a entornos industriales y productivos.',
  },

  {
    icon: Bolt,

    title: 'Servicios Eléctricos e Instrumentación',

    description:
      'Implementación y soporte de sistemas eléctricos industriales.',

    details:
      'Instalación, mantenimiento e integración de soluciones eléctricas e instrumentación.',
  },

  {
    icon: Cog,

    title: 'Diseño e Ingeniería Aplicada',

    description:
      'Desarrollo de soluciones técnicas adaptadas a cada proyecto.',

    details:
      'Diseño mecánico e industrial enfocado en eficiencia operativa y mejora de procesos.',
  },

  {
    icon: ClipboardCheck,

    title: 'Supervisión y Soporte Técnico',

    description:
      'Seguimiento técnico y control durante la ejecución de proyectos.',

    details:
      'Supervisión especializada orientada a calidad, seguridad y cumplimiento.',
  },

  {
    icon: Factory,

    title: 'Servicios para Plantas Industriales',

    description:
      'Soporte técnico para operaciones y procesos industriales.',

    details:
      'Optimización de instalaciones y asistencia en operación industrial.',
  },

  {
    icon: HardHat,

    title: 'Gestión y Coordinación de Proyectos',

    description:
      'Administración técnica y coordinación de actividades.',

    details:
      'Control de recursos, cronogramas y cumplimiento de objetivos del proyecto.',
  },

]

export default function Services() {

  return (

    <div>

      {/* Hero */}

      <section className="bg-blue-900 text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-4">

          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-10" />

          <h1
            className="
      text-5xl
      md:text-6xl
      font-extrabold
      text-white
      tracking-tight
      mb-8
    "
          >
            Nuestros Servicios
          </h1>

          <p
            className="
      text-lg
      md:text-2xl
      text-slate-200
      leading-relaxed
      max-w-4xl
      mx-auto
    "
          >
            Soluciones integrales en ingeniería,
            mantenimiento industrial,
            estructuras metalmecánicas
            y ejecución de proyectos.
          </p>

        </div>

      </section>

      {/* Services Grid */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {allServices.map((service, index) => {

              const Icon = service.icon

              return (

                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                >

                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">

                    <Icon
                      className="text-blue-900"
                      size={32}
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">

                    {service.title}

                  </h3>

                  <p className="text-gray-700 mb-4">

                    {service.description}

                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">

                    {service.details}

                  </p>

                </div>

              )

            })}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-bold text-blue-900 mb-12">

            ¿Por qué elegir AIPROM?

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>

              <div className="text-4xl font-bold text-orange-500 mb-2">

                Ingeniería

              </div>

              <p className="text-gray-700">

                Experiencia aplicada en proyectos industriales.

              </p>

            </div>

            <div>

              <div className="text-4xl font-bold text-orange-500 mb-2">

                Calidad

              </div>

              <p className="text-gray-700">

                Compromiso con ejecución técnica y cumplimiento.

              </p>

            </div>

            <div>

              <div className="text-4xl font-bold text-orange-500 mb-2">

                Soporte

              </div>

              <p className="text-gray-700">

                Acompañamiento técnico durante todo el proyecto.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}



