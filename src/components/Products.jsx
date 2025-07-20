import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const NavigateHandler = (name) => {
    navigate(`/product/details/${name}`);
  };
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Product;
