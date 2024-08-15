import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 lg:px-6 h-14 flex items-center shadow-sm">
      <Link to="/home" className="flex items-center text-2xl font-bold">
        Fitness Gulera
      </Link>

      <button
        className="ml-auto block lg:hidden text-2xl"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
      >
        <TiThMenuOutline />
      </button>

      <nav
        className={`lg:flex lg:items-center lg:ml-auto lg:gap-4 transition-all duration-300 ${
          isMenuOpen ? "block text-center pt-14 min-h-full" : "hidden"
        } absolute top-14 left-0 w-full bg-white shadow-lg lg:static lg:w-auto lg:bg-transparent`}
      >
        <Link
          to="/home"
          className="block text-lg font-medium hover:underline underline-offset-4 py-2 lg:py-0"
        >
          Agendas
        </Link>
        <Link
          to="/clients"
          className="block text-lg font-medium hover:underline underline-offset-4 py-2 lg:py-0"
        >
          Clientes
        </Link>
        <Link
          to="/dashboard"
          className="block text-lg font-medium hover:underline underline-offset-4 py-2 lg:py-0"
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="block text-lg font-medium hover:underline underline-offset-4 py-2 lg:py-0"
        >
          Perfil
        </Link>
      </nav>
    </header>
  );
}

export default Header;
