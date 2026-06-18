import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-4xl font-bold text-blue-950 mt-3">
            Solicite su Cotización
          </h2>
          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Estamos listos para atender sus proyectos,
            requerimientos técnicos y servicios industriales.
          </p>
        </div>

        {/* Tarjetas de Información */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

          {/* Correo */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Mail className="text-orange-500" size={30} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Correo
            </h3>
            <p className="text-gray-700">
              ventas@aipromperu.com
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Atención para consultas y cotizaciones
            </p>
          </div>

          {/* Teléfono */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Phone className="text-orange-500" size={30} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Teléfonos
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>Central: +51 986 551 936</p>
              <p>Cotización: +51 922 351 393</p>
              <p>Estudio de Ingeniería: +51 982 300 892</p>
              <p>Electricidad : +51 986 175 166</p>
            </div>
          </div>

          {/* Dirección */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <MapPin className="text-orange-500" size={30} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Oficina
            </h3>
            <p className="text-gray-700">
              Av. Nicolas Ayllon Nro. 5108
            </p>
            <p className="text-gray-500 mt-2">
              Galería Ceres – Oficina 301 (3er Piso)
            </p>
          </div>

        </div>

        {/* Formulario */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-10 hover:shadow-xl transition-all duration-300">
          <form className="space-y-6">

            {/* Fila 1: Nombre y Correo */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Fila 2: Celular y Empresa (Añadido para igualar el otro formulario) */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Celular"
                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Fila 3: Servicio requerido (Añadido) */}
            <input
              type="text"
              placeholder="Servicio requerido"
              className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />

            {/* Textarea */}
            <textarea
              rows={5}
              placeholder="Describa brevemente su requerimiento..."
              className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            />

            {/* Botón */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              SOLICITAR COTIZACIÓN
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}


