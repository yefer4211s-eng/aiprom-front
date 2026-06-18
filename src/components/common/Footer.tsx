
import { Link } from 'react-router'

import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from 'lucide-react'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (

    <footer
      className="
bg-gradient-to-br
from-[#041B3A]
via-[#07295B]
to-[#031126]
text-white
border-t-4
border-orange-500
"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Marca */}

          <div>

            <h2
              className="
text-4xl
md:text-5xl
font-black
mb-3
tracking-tight
text-white
"
            >

              AIPROM

            </h2>

            <div
              className="
w-12
h-1
bg-orange-500
mb-6
rounded-full
"
            />

            <p
              className="
text-slate-300
leading-7
text-sm
md:text-base
"
            >

              Aplicando Ingeniería en Proyectos y
              Mantenimiento.

              Servicios especializados en ingeniería,
              mantenimiento industrial y ejecución
              de proyectos.

            </p>

          </div>

          {/* Servicios */}

          <div>

            <h3
              className="
text-lg
md:text-xl
font-semibold
mb-5
text-white
uppercase
tracking-wider
"
            >

              SERVICIOS

            </h3>

            <div className="w-10 h-1 bg-orange-500 mb-5" />

            <ul className="space-y-3">

              {[
                'Ingeniería y Proyectos',
                'Mantenimiento Industrial',
                'Estructuras Metalmecánicas',
                'Servicios Eléctricos',
              ].map((item) => (

                <li key={item}>

                  <Link
                    to="/services"
                    className="
flex
items-center
gap-2
text-slate-300
hover:text-orange-400
transition
"
                  >

                    <ChevronRight size={16} />

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Navegación */}

          <div>

            <h3
              className="
text-lg
md:text-xl
font-semibold
mb-5
text-white
uppercase
tracking-wider
"
            >

              NAVEGACIÓN

            </h3>

            <div className="w-10 h-1 bg-orange-500 mb-5" />

            <ul className="space-y-3">

              {[
                ['/', 'Inicio'],
                ['/about', 'Nosotros'],
                ['/projects', 'Trabajos Ejecutados'],
                ['/contact', 'Contacto'],
              ].map(([url, label]) => (

                <li key={label}>

                  <Link
                    to={url}
                    className="
flex
items-center
gap-2
text-slate-300
hover:text-orange-400
transition
"
                  >

                    <ChevronRight size={16} />

                    {label}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3
              className="
text-lg
md:text-xl
font-semibold
mb-5
text-white
uppercase
tracking-wider
"
            >

              CONTACTO

            </h3>

            <div className="w-10 h-1 bg-orange-500 mb-5" />

            <div className="space-y-4">

              <div className="flex gap-3">

                <Mail
                  size={18}
                  className="
text-orange-400
shrink-0
mt-1
"
                />

                <span className="text-slate-300 text-sm">

                  ventas@aipromperu.com

                </span>

              </div>

              <div className="flex gap-3">

                <Phone
                  size={18}
                  className="
text-orange-400
shrink-0
mt-1
"
                />

                <span className="text-slate-300 text-sm">

                  +51 986 551 936

                </span>

              </div>

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="
text-orange-400
shrink-0
mt-1
"
                />

                <span className="text-slate-300 text-sm">

                  Av. Nicolas Ayllon 5108

                </span>

              </div>

            </div>

            <div className="flex gap-3 mt-6">

              {[
                FaInstagram,
                FaFacebookF,
                FaLinkedinIn,
              ].map((Icon, i) => (

                <a
                  key={i}
                  href="#"
                  className="
w-10
h-10
rounded-lg
bg-white/10
flex
items-center
justify-center
hover:bg-orange-500
transition
"
                >

                  <Icon size={18} />

                </a>

              ))}

            </div>

          </div>

        </div>

        <div
          className="
mt-10
pt-6
border-t
border-white/10
"
        >

          <div
            className="
flex
flex-col
gap-2
lg:flex-row
justify-between
items-center
"
          >

            <p className="text-slate-400 text-sm">
              © {currentYear} AIPROM — Todos los derechos reservados.
            </p>

            <p
              className="
text-orange-400
text-sm
"
            >

              Ingeniería • Mantenimiento • Proyectos

            </p>

          </div>

        </div>

      </div>

    </footer>

  )

}




