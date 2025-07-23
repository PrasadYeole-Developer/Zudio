import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-8 z-10 relative py-2">
      <div className="flex items-center w-full">
        <img
          src="https://www.zudio.com/cdn/shop/files/logo_180x.png?v=1613519896"
          alt="Zudio Logo"
          width={120}
          height={120}
          className="cursor-pointer mr-4 sm:mr-16"
          onClick={() => (window.location.href = "/")}
        />
        <div className="hidden md:flex gap-8 sm:gap-12 items-center cursor-pointer text-white font-sans font-semibold">
          <NavLink
            className="hover:text-gray-300 uppercase text-sm tracking-widest transition-colors duration-300"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-gray-300 uppercase text-sm tracking-widest transition-colors duration-300"
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className="hover:text-gray-300 uppercase text-sm tracking-widest transition-colors duration-300"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
      <button
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        className="relative group w-8 h-8 cursor-pointer active:scale-90 transition-transform duration-300 md:hidden z-20"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <i
          className={`ri-menu-line text-white text-2xl absolute inset-0 transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        ></i>
        <i
          className={`ri-close-line text-white text-2xl absolute inset-0 transition-all duration-300 ${
            menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        ></i>
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-start py-16 gap-10 text-white font-sans font-semibold text-xl transition-all duration-300 z-10 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <NavLink
          className="hover:text-gray-300 uppercase tracking-widest transition-colors duration-300"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="hover:text-gray-300 uppercase tracking-widest transition-colors duration-300"
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className="hover:text-gray-300 uppercase tracking-widest transition-colors duration-300"
          to="/about"
        >
          About
        </NavLink>
        {/* <button
        aria-label="Open Menu"
        className="hidden md:block relative group w-8 h-8 cursor-pointer active:scale-90 transition-scale duration-300"
      >
        <i className="ri-menu-line text-white text-2xl absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:scale-0"></i>
        <i className="ri-menu-3-line text-white text-2xl absolute inset-0 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></i>
      </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
