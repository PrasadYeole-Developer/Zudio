import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);
  const params = useParams();
  const product = products.find((product) => product.id === params.id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] select-none">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button
          className="bg-[#222] text-white px-4 py-2 rounded hover:bg-[#333] transition-colors cursor-pointer"
          onClick={() => navigate("/products")}
        >
          <i class="ri-arrow-left-double-line"></i> Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 select-none">
      <button
        className="mb-8 bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-2 rounded transition-colors cursor-pointer"
        onClick={() => navigate("/products")}
      >
        <i class="ri-arrow-left-double-line"></i> Back to Products
      </button>
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded shadow-lg overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover rounded max-h-96 w-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between p-6">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-[#111]">
              {product.name}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags &&
                product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-gray-200 uppercase"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span className="font-semibold text-gray-600">Category: </span>
              <span className="text-gray-800">{product.category}</span>
            </div>
            <div className="mb-6 flex items-center gap-2">
              <span className="font-semibold text-gray-600">Price: </span>
              <span className="text-2xl font-bold text-[#222]">
                ₹{product.price}
              </span>
            </div>
          </div>
          <button
            className="mt-6 bg-[#222] hover:bg-[#333] text-white px-6 py-3 rounded font-semibold transition-colors cursor-pointer"
            onClick={() => toast.success("Product Added to Cart")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
