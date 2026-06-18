import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import logo from '@/assets/images/aiprom-logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Trabajos Realizados', href: '/projects' },
    { label: 'Acerca de Nosotros', href: '/about' },
    { label: 'Contacto', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="AIPROM Logo"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md border border-transparent hover:text-orange-600 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contact#solicitar-informacion"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              SOLICITE SU COTIZACIÓN
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-3 py-3 text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact#solicitar-informacion"
              className="block text-center px-4 py-3 bg-orange-500 text-white rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              SOLICITE SU COTIZACIÓN
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
