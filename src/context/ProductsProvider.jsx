import React, { useState } from "react";
import { createContext } from "react";
import { nanoid } from "nanoid";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      name: "Mens Classic Polo Tee - Navy",
      price: 599,
      category: "Men",
      description:
        "A soft cotton polo shirt in deep navy, perfect for casual outings or weekend style.",
      image: "/bluepolo.jpg",
      tags: ["casual", "summer", "trending"],
    },
    {
      id: nanoid(),
      name: "Mens Slim Fit Jeans - Washed Blue",
      price: 1299,
      category: "Men",
      description:
        "Comfort-stretch denim with a modern slim fit, ideal for day-to-night transitions.",
      image: "/bluewashed.jpg",
      tags: ["denim", "trending", "everyday"],
    },
    {
      id: nanoid(),
      name: "Mens Geometric Print Shirt",
      price: 849,
      category: "Men",
      description:
        "A lightweight shirt with a bold geometric pattern, great for summer parties or vacations.",
      image: "/geometric.jpg",
      tags: ["summer", "printed", "party-wear"],
    },
    {
      id: nanoid(),
      name: "Womens Floral Maxi Dress - Coral",
      price: 999,
      category: "Women",
      description:
        "A flowing maxi dress in coral with a vibrant floral print – perfect for brunches or beach days.",
      image: "/coralmaxi.jpg",
      tags: ["summer", "floral", "bohemian"],
    },
    {
      id: nanoid(),
      name: "Womens Embroidered Kurti - Turquoise",
      price: 1199,
      category: "Women",
      description:
        "A chic cotton kurti with delicate embroidery and a straight fit, ideal for ethnic-chic style.",
      image: "/turquoise.jpg",
      tags: ["ethnic", "trending", "festive"],
    },
    {
      id: nanoid(),
      name: "Womens Denim Jacket - Light Blue",
      price: 1599,
      category: "Women",
      description:
        "A light washed denim jacket with a relaxed fit, perfect for layering in cooler weather.",
      image: "/lightblue.jpg",
      tags: ["layering", "denim", "new-arrival"],
    },
    {
      id: nanoid(),
      name: "Kids Graphic T-Shirt - Red",
      price: 499,
      category: "Kids",
      description:
        "A vibrant red tee featuring a fun cartoon graphic, made from soft cotton for all-day play.",
      image: "/kidred.jpg",
      tags: ["kids", "graphic", "playtime"],
    },
    {
      id: nanoid(),
      name: "Kids Fit-and-Flare Dress - Pink",
      price: 699,
      category: "Kids",
      description:
        "A cute pink dress with a flared skirt and floral print, perfect for birthday parties and outings.",
      image: "/pinkdress.jpg",
      tags: ["girls", "floral", "occasion"],
    },
    {
      id: nanoid(),
      name: "Kids Stretchy Jeans - Indigo",
      price: 799,
      category: "Kids",
      description:
        "Soft indigo denim jeans with a bit of stretch for comfort, ideal for school or casual play.",
      image: "/darkjeans.jpg",
      tags: ["kids", "denim", "comfortable"],
    },
  ]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
