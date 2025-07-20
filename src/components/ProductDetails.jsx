import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
