import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

const Product = () => {
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();
  const NavigateHandler = (id) => {
    navigate(`/products/details/${id}`);
  };
  return (
    <>
      <div className="flex flex-col items-center p-8 select-none">
        <button
          className="self-start bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition-colors cursor-pointer flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <i className="ri-arrow-left-long-line"></i>
        </button>
        <h1 className="text-4xl font-bold text-[#111]">Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cards p-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="group transition-all duration-300 h-full flex card"
          >
            <div className="bg-white text-[#111] rounded shadow-md hover:shadow-lg flex flex-col overflow-hidden h-full min-h-[520px] w-full transform transition-all duration-300 group-hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-left w-full leading-tight">
                    {product.name}
                  </h3>
                  <p className="leading-relaxed text-left w-full line-clamp-4 mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2 uppercase">
                    {product.tags &&
                      product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="w-full flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-2 text-lg font-bold text-[#222]">
                    ₹{product.price}
                  </span>
                  <button
                    className="inline-flex items-center gap-2 bg-[#222] hover:bg-[#333] text-white px-4 py-2 rounded cursor-pointer transition-colors duration-300"
                    onClick={() => NavigateHandler(product.id)}
                  >
                    View Details
                    <svg
                      className="w-4 h-4 transform transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
