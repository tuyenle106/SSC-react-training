import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-5 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[24px] font-bold text-[#6c3bff]">
          Jang<span className="text-[#333] ml-2">Wonyoung</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#333] focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-5 items-center">
          <Link
            to="/"
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/todo"
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all duration-300"
          >
            Todo
          </Link>
          <Link
            to="/posts"
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all duration-300"
          >
            Blog
          </Link>
          <Link
            to="/users"
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all duration-300"
          >
            Users
          </Link>
          <a
            href="#about"
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all duration-300"
          >
            Services
          </a>
          <Link
            to="/contact"
            className="bg-[#6c3bff] text-white px-4 py-2 rounded-md font-medium hover:bg-[#5432cc] transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-5 ${
          menuOpen ? "max-h-[500px] pb-5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all"
          >
            Home
          </Link>
          <Link
            to="/todo"
            onClick={closeMenu}
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all"
          >
            Todo
          </Link>
          <Link
            to="/posts"
            onClick={closeMenu}
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all"
          >
            Blog
          </Link>
          <Link
            to="/users"
            onClick={closeMenu}
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all"
          >
            Users
          </Link>

          <a
            href="#about"
            onClick={closeMenu}
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all"
          >
            About
          </a>
          <a
            href="#services"
            onClick={closeMenu}
            className="text-[#333] font-medium px-2 py-1 hover:bg-[#6c3bff] hover:text-white rounded transition-all"
          >
            Services
          </a>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="bg-[#6c3bff] text-white px-4 py-2 rounded-md font-medium hover:bg-[#5432cc] transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
