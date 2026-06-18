import { Link } from 'react-router'
import { Users, Target, Lightbulb } from 'lucide-react'

export default function About() {

  const values = [
    {
      icon: Target,
      title: 'Compromiso',
      description:
        'Cumplimos estándares técnicos y plazos de ejecución garantizando calidad y seguridad en cada proyecto.',
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description:
        'Aplicamos soluciones de ingeniería para optimizar procesos y generar mejores resultados.',
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description:
        'Colaboramos estrechamente con nuestros clientes para desarrollar soluciones alineadas a sus objetivos.',
    },
  ]

  const stats = [
    {
      number: 'Industrial',
      label: 'Proyectos y Ejecución',
    },
    {
      number: 'Integral',
      label: 'Soluciones Técnicas',
    },
    {
      number: 'Ingeniería',
      label: 'Diseño y Desarrollo',
    },
    {
      number: 'Calidad',
      label: 'Compromiso Operativo',
    },
  ]

  return (

    <div>

      {/* Hero Section */}

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

            Sobre AIPROM

          </h1>

          <p className="text-xl text-blue-100">

            Aplicando Ingeniería en Proyectos y Mantenimiento S.A.C.

            Soluciones especializadas en ingeniería,
            mantenimiento industrial,
            estructuras metalmecánicas
            y ejecución de proyectos.

          </p>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

            <div>

              <h2 className="text-3xl font-bold text-blue-900 mb-4">

                Nuestra Misión

              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">

                Brindar soluciones eficientes en ingeniería,
                mantenimiento industrial y ejecución de proyectos,
                con enfoque en calidad, seguridad y mejora continua.

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-blue-900 mb-4">

                Nuestra Visión

              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">

                Consolidarnos como una empresa referente
                en proyectos industriales e ingeniería aplicada,
                reconocida por confiabilidad e innovación.

              </p>

            </div>

          </div>

          {/* Company Story */}

          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">

            <h2 className="text-3xl font-bold text-blue-900 mb-6">

              Nuestra Historia

            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">

              <p>

                AIPROM nace con el objetivo de brindar
                servicios especializados para el desarrollo
                y ejecución de proyectos industriales.

              </p>

              <p>

                Nuestra experiencia se orienta al diseño,
                mantenimiento y supervisión técnica
                adaptándonos a cada necesidad del cliente.

              </p>

              <p>

                Trabajamos con compromiso,
                calidad y enfoque en resultados.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">

            Nuestros Valores

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {values.map((value, index) => {

              const Icon = value.icon

              return (

                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md border border-gray-200"
                >

                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">

                    <Icon
                      className="text-orange-600"
                      size={32}
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">

                    {value.title}

                  </h3>

                  <p className="text-gray-700">

                    {value.description}

                  </p>

                </div>

              )

            })}

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">

            Nuestro Enfoque

          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((stat, index) => (

              <div
                key={index}
                className="
            text-center
            bg-gray-50
            rounded-xl
            p-6
            min-h-[180px]
            flex
            flex-col
            justify-center
          "
              >

                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">

                  {stat.number}

                </div>

                <p className="text-gray-700 font-semibold text-sm md:text-base leading-relaxed">

                  {stat.label}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Team */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">

            Nuestro Equipo

          </h2>

          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">

            Profesionales orientados al desarrollo,
            supervisión y ejecución de proyectos industriales.

          </p>

          <div className="bg-white rounded-lg p-12 shadow-md border border-gray-200 text-center">

            <p className="text-lg text-gray-700 mb-6">

              Integramos experiencia técnica,
              planificación y compromiso.

            </p>

            <p className="text-gray-600">

              Trabajamos para entregar soluciones
              alineadas con los objetivos de cada cliente.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 bg-blue-900 text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-bold text-white mb-6"> Conversemos sobre su Proyecto </h2>

          <p className="text-xl text-blue-100 mb-8">

            Si busca soporte en ingeniería,
            mantenimiento o ejecución de proyectos,
            estamos listos para ayudar.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >

              Solicitar Información

            </Link>

            <Link
              to="/services"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >

              Ver Servicios

            </Link>

          </div>

        </div>

      </section>

    </div>

  )

}

