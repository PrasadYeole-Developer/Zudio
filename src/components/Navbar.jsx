import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex gap-6 items-center cursor-pointer z-10 relative text-white font-sans font-semibold">
      <img
        src="https://www.zudio.com/cdn/shop/files/logo_180x.png?v=1613519896"
        alt="Zudio Logo"
        width={100}
        height={100}
        className="cursor-pointer mr-8"
      />
      <NavLink
        className="hover:text-gray-300 uppercase text-xs tracking-wide"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="hover:text-gray-300 uppercase text-xs tracking-wide"
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className="hover:text-gray-300 uppercase text-xs tracking-wide"
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
