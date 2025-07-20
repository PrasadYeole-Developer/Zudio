import React from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 z-10 relative">
      <div className="w-full flex gap-12 items-center cursor-pointer text-white font-sans font-semibold">
        <img
          src="https://www.zudio.com/cdn/shop/files/logo_180x.png?v=1613519896"
          alt="Zudio Logo"
          width={120}
          height={120}
          className="cursor-pointer mr-16"
          onClick={() => window.location.reload()}
        />
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
      <button
        aria-label="Open Menu"
        className="relative group w-8 h-8 cursor-pointer active:scale-90 transition-scale duration-300"
      >
        <i className="ri-menu-line text-white text-2xl absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:scale-0"></i>
        <i className="ri-menu-3-line text-white text-2xl absolute inset-0 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></i>
      </button>
    </nav>
  );
};

export default Navbar;
