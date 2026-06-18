import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-10" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Contáctanos
          </h1>
          <p className="text-xl text-blue-100">
            ¿Tienes un proyecto industrial o requieres soporte técnico?
            En AIPROM estamos listos para ayudarte en ingeniería,
            mantenimiento y ejecución de proyectos.
          </p>
        </div>
      </section>

      {/* Información */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

            {/* Correo */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Correo</h3>
              <a href="mailto:ventas@aipromperu.com" className="text-orange-500 hover:text-orange-600 font-semibold">
                ventas@aipromperu.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Respuesta dentro de 24 horas</p>
            </div>

            {/* Dirección */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oficina</h3>
              <p className="text-gray-700 font-semibold">Av. Nicolás Ayllón 5108</p>
              <p className="text-gray-600">Lima – Perú</p>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Horario</h3>
              <p className="text-gray-700 font-semibold">Lun – Vie</p>
              <p className="text-gray-600">08:00 – 18:00</p>
            </div>

            {/* Teléfono 1 */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
              <a href="tel:+51986551936" className="text-orange-500 hover:text-orange-600 font-semibold">
                +51 986 551 936
              </a>
              <p className="text-sm text-gray-500 mt-2">Atención Central</p>
            </div>

            {/* Teléfono 2 */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
              <a href="tel:+51922351393" className="text-orange-500 hover:text-orange-600 font-semibold">
                +51 922 351 393
              </a>
              <p className="text-sm text-gray-500 mt-2">Atención comercial y técnica</p>
            </div>

            {/* Teléfono 3 */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
              <a href="tel:+51982300892" className="text-orange-500 hover:text-orange-600 font-semibold">
                +51 982 300 892
              </a>
              <p className="text-sm text-gray-500 mt-2">Estudio de Ingeniería</p>
            </div>

            {/* Teléfono 4 */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
              <a href="tel:+51986175166" className="text-orange-500 hover:text-orange-600 font-semibold">
                +51 986 175 166
              </a>
              <p className="text-sm text-gray-500 mt-2">Electricidad e Instrumentación</p>
            </div>

          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="solicitar-informacion" className="py-20 bg-white scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Solicita Información</h2>
            <p className="text-xl text-gray-700">Cuéntanos sobre tu proyecto y nos pondremos en contacto.</p>
          </div>
          <form className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-6 hover:shadow-xl transition-all duration-300">
            <input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Nombre completo" />
            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Correo electrónico" />

            {/* Nuevo campo de Celular agregado aquí */}
            <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Celular" />

            <input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Empresa" />
            <input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Servicio requerido" />
            <textarea rows={6} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none" placeholder="Describe tu requerimiento..." />
            <button className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-blue-950 mb-2">¿Qué tipo de proyectos realizan?</h3>
              <p className="text-gray-600">Ingeniería aplicada, mantenimiento industrial, estructuras metalmecánicas, servicios eléctricos e instrumentación.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-blue-950 mb-2">¿Atienden proyectos fuera de Lima?</h3>
              <p className="text-gray-600">Sí, ejecutamos proyectos en distintas regiones del Perú.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-blue-950 mb-2">¿Brindan soporte técnico?</h3>
              <p className="text-gray-600">Sí, ofrecemos supervisión, asistencia técnica y mantenimiento especializado.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
