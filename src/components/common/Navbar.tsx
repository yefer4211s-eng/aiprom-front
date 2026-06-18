import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import logo from '../../assets/images/aiprom-logo.png'

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
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="AIPROM Logo"
            className="
              h-8
              md:h-10
              lg:h-12
              w-auto
              object-contain
            "
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

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            to="/contact#solicitar-informacion"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            SOLICITE SU COTIZACIÓN
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-lg absolute w-full left-0 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md border border-transparent hover:text-orange-600 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              to="/contact#solicitar-informacion"
              className="block w-full text-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              SOLICITE SU COTIZACIÓN
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
