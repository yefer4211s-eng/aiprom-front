// import { Link } from 'react-router'
// import { ExternalLink } from 'lucide-react'

// const projects = [
//   {
//     title: 'Predictive Sales Platform',
//     description: 'Built an ML-powered sales forecasting system that improved accuracy by 40% for a Fortune 500 retailer.',
//     image: '📊',
//     tags: ['ML', 'Python', 'Data Analytics'],
//     client: 'RetailCorp Inc.',
//   },
//   {
//     title: 'Intelligent Document Processing',
//     description: 'Developed an AI system to automatically extract and process data from complex documents with 95% accuracy.',
//     image: '📄',
//     tags: ['NLP', 'OCR', 'Automation'],
//     client: 'FinanceHub Ltd.',
//   },
//   {
//     title: 'Real-time Anomaly Detection',
//     description: 'Created a real-time monitoring system that detects anomalies in network traffic patterns, reducing security incidents by 60%.',
//     image: '🔒',
//     tags: ['ML', 'Cybersecurity', 'Real-time'],
//     client: 'SecureNet Corp.',
//   },
// ]

// export default function ProjectsSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
//           <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//             Explore some of our recent success stories and see how we&apos;ve helped clients transform their operations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
//             >
//               <div className="h-48 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
//                 <div className="text-6xl">{project.image}</div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
//                 <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
//                 <div className="mb-4 flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-semibold rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-500 mb-4">Client: <span className="font-semibold text-gray-900">{project.client}</span></p>
//                 <Link
//                   to="/projects"
//                   className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
//                 >
//                   View Project <ExternalLink size={16} className="ml-2" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <Link
//             to="/projects"
//             className="inline-block px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
//           >
//             View All Projects
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Link } from 'react-router'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Proyecto Electromecánico Industrial',
    description:
      'Desarrollo e implementación de soluciones electromecánicas para optimizar procesos operativos.',

    image: '⚙️',

    tags: [
      'Electromecánica',
      'Ingeniería',
      'Implementación',
    ],

    client: 'Proyecto Industrial',
  },

  {
    title: 'Mantenimiento y Soporte Industrial',

    description:
      'Servicios de mantenimiento orientados a mejorar disponibilidad y continuidad operativa.',

    image: '🛠️',

    tags: [
      'Mantenimiento',
      'Supervisión',
      'Operación',
    ],

    client: 'Sector Industrial',
  },

  {
    title: 'Diseño y Ejecución de Estructuras',

    description:
      'Diseño técnico y ejecución de estructuras metalmecánicas para aplicaciones industriales.',

    image: '🏗️',

    tags: [
      'Estructuras',
      'Metalmecánica',
      'Diseño',
    ],

    client: 'Proyecto Corporativo',
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Trabajos Ejecutados
          </span>

          <h2 className="text-4xl font-bold text-blue-950 mt-3">
            Proyectos y Experiencia
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Conoce algunos ejemplos de servicios y proyectos
            desarrollados en ingeniería, mantenimiento y soluciones industriales.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                rounded-2xl
                overflow-hidden
                border
                border-gray-200
                bg-white
                shadow-sm
                hover:shadow-xl
                transition
                hover:-translate-y-2
              "
            >

              <div className="
                h-56
                bg-gradient-to-br
                from-blue-50
                to-orange-50
                flex
                items-center
                justify-center
              ">
                <div className="text-7xl">
                  {project.image}
                </div>
              </div>

              <div className="p-8">

                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">

                  {project.tags.map((tag, i) => (

                    <span
                      key={i}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-orange-100
                        text-orange-700
                        text-sm
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <p className="text-sm text-gray-500">

                  Área:

                  <span className="font-semibold text-blue-950 ml-2">
                    {project.client}
                  </span>

                </p>

                <Link
                  to="/projects"
                  className="
                    inline-flex
                    items-center
                    mt-6
                    text-orange-500
                    font-semibold
                    hover:text-orange-600
                  "
                >
                  Ver Proyecto

                  <ExternalLink
                    size={16}
                    className="ml-2"
                  />

                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            to="/projects"
            className="
              inline-block
              px-8
              py-4
              rounded-xl
              bg-blue-900
              text-white
              font-semibold
              hover:bg-blue-800
            "
          >
            Ver Todos los Proyectos
          </Link>

        </div>

      </div>

    </section>
  )
}
