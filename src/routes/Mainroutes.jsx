import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import { Routes, Route } from "react-router-dom";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Mainroutes;
