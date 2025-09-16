import { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#1F2937] text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-wide">Time&Trust</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300">Inicio</a>
            <a href="#coleccion" className="hover:text-gray-300">Colección</a>
            <a href="#reviews" className="hover:text-gray-300">Reseñas</a>
            <a href="#contacto" className="hover:text-gray-300">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111827]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">Inicio</a>
            <a href="#coleccion" className="block px-3 py-2 rounded-md hover:bg-gray-700">Colección</a>
            <a href="#reviews" className="block px-3 py-2 rounded-md hover:bg-gray-700">Reseñas</a>
            <a href="#contacto" className="block px-3 py-2 rounded-md hover:bg-gray-700">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}
