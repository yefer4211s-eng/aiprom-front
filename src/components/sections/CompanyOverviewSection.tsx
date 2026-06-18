import { CheckCircle } from 'lucide-react';
import logo from '../../assets/images/aiprom-logo.png'; // Asegúrate de que esta ruta sea correcta

export default function CompanyOverviewSection() {
  const features = [
    'Experiencia en Ingeniería y Mantenimiento',
    'Desarrollo y Ejecución de Proyectos',
    'Diseño e Ingeniería Aplicada',
    'Calidad y Cumplimiento',
    'Acompañamiento Técnico',
    'Mejora Continua y Eficiencia',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* 1. Contenedor del Logo: Ajustes para responsividad */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg 
                          h-80 md:h-[30rem] lg:h-[35rem] 
                          flex items-center justify-center border border-blue-200 
                          p-6 md:p-12 overflow-hidden">


            <div className="text-center flex flex-col items-center w-full h-full justify-center">
              {/* 2. Imagen del Logo: Ajustes de tamaño responsivo */}
              <img
                src={logo}
                alt="Logo AIPROM"
                className="max-h-full max-w-full h-auto w-auto object-contain drop-shadow-md"
              />


              <p className="text-gray-600 font-medium mt-6 md:mt-8 text-xs md:text-sm"> Aplicando Ingeniería en Proyectos y Mantenimiento </p>

            </div>
          </div>

          {/* Content (Este bloque no cambia, se mantiene igual) */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">¿Por qué escoger AIPROM?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Combinamos experiencia técnica, compromiso y enfoque en resultados para desarrollar proyectos de ingeniería y mantenimiento adaptados a las necesidades de cada cliente. Nuestro equipo trabaja con estándares de calidad y una ejecución orientada a la seguridad, eficiencia y continuidad operativa.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Testimonio de clientes */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-600 italic">
                {"\"Trabajamos para desarrollar soluciones confiables que generen valor y contribuyan al crecimiento de nuestros clientes.\""}
              </p>
              <p className="text-gray-900 font-semibold mt-2"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
