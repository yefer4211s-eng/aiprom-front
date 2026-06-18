
const projects = [

  {
    title: 'Diseño y Ejecución de Proyecto Industrial',

    description:
      'Desarrollo integral de soluciones de ingeniería para implementación y mejora de procesos industriales.',

    image: '🏭',

    tags: [
      'Ingeniería',
      'Proyectos',
      'Industrial',
    ],

    client:
      'Sector Industrial',

    results:
      'Optimización de procesos y cumplimiento de estándares técnicos.',

    timeline:
      '6 meses',
  },

  {
    title: 'Mantenimiento Integral de Planta',

    description:
      'Servicio especializado de mantenimiento preventivo y correctivo para asegurar continuidad operativa.',

    image: '🔧',

    tags: [
      'Mantenimiento',
      'Industrial',
      'Soporte Técnico',
    ],

    client:
      'Planta Industrial',

    results:
      'Reducción de tiempos de parada y mejora de disponibilidad operativa.',

    timeline:
      '4 meses',
  },

  {
    title: 'Fabricación de Estructuras Metalmecánicas',

    description:
      'Diseño, fabricación e instalación de estructuras metálicas para aplicaciones industriales.',

    image: '🏗️',

    tags: [
      'Metalmecánica',
      'Fabricación',
      'Montaje',
    ],

    client:
      'Proyecto Industrial',

    results:
      'Ejecución conforme a especificaciones técnicas y cronograma.',

    timeline:
      '5 meses',
  },

  {
    title: 'Implementación Eléctrica e Instrumentación',

    description:
      'Instalación y adecuación de sistemas eléctricos e instrumentación industrial.',

    image: '⚡',

    tags: [
      'Eléctrica',
      'Instrumentación',
      'Industrial',
    ],

    client:
      'Cliente Industrial',

    results:
      'Mejora de control operacional y seguridad del sistema.',

    timeline:
      '3 meses',
  },

  {
    title: 'Ingeniería Aplicada para Optimización Operativa',

    description:
      'Desarrollo de propuestas técnicas para incrementar eficiencia y productividad.',

    image: '⚙️',

    tags: [
      'Ingeniería',
      'Optimización',
      'Diseño',
    ],

    client:
      'Sector Productivo',

    results:
      'Reducción de costos operativos y mejora del rendimiento.',

    timeline:
      '7 meses',
  },

  {
    title: 'Supervisión Técnica y Soporte de Campo',

    description:
      'Acompañamiento técnico durante ejecución y puesta en marcha.',

    image: '📋',

    tags: [
      'Supervisión',
      'Control',
      'Soporte',
    ],

    client:
      'Proyecto Especializado',

    results:
      'Cumplimiento de calidad, seguridad y plazos establecidos.',

    timeline:
      'Continuo',
  },

]

export default function Projects() {

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

            Nuestros Trabajos Realizados

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

            Conoce algunos de los servicios,
            proyectos y soluciones ejecutadas
            por AIPROM.

          </p>

        </div>

      </section>

      {/* Grid */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col"
              >

                <div className="h-48 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">

                  <div className="text-6xl">

                    {project.image}

                  </div>

                </div>

                <div className="p-6 flex flex-col flex-1">

                  <h3 className="text-xl font-bold text-gray-900 mb-2">

                    {project.title}

                  </h3>

                  <p className="text-gray-600 mb-4 flex-1">

                    {project.description}

                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">

                    {project.tags.map((tag, tagIndex) => (

                      <span
                        key={tagIndex}
                        className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-semibold rounded-full"
                      >

                        {tag}

                      </span>

                    ))}

                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">

                    <p className="text-gray-600">

                      <span className="font-semibold text-gray-900">

                        Cliente:

                      </span>

                      {' '}

                      {project.client}

                    </p>

                    <p className="text-gray-600">

                      <span className="font-semibold text-gray-900">

                        Duración:

                      </span>

                      {' '}

                      {project.timeline}

                    </p>

                    <p className="text-gray-700 italic">

                      "{project.results}"

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 bg-blue-900 text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-bold mb-6 text-white">
            ¿Tienes un proyecto?
          </h2>

          <p className="text-xl text-blue-100 mb-8">

            Trabajemos juntos en soluciones
            de ingeniería, mantenimiento
            y ejecución industrial.

          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >

            Solicitar Información

          </a>

        </div>

      </section>

    </div>

  )

}


