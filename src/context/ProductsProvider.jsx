import React, { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Mens Classic Polo Tee - Navy",
      price: 599,
      category: "Men",
      description:
        "A soft cotton polo shirt in deep navy, perfect for casual outings or weekend style.",
      image:
        "https://images.pexels.com/photos/5322205/pexels-photo-5322205.jpeg?auto=compress&w=600&q=80",
      tags: ["casual", "summer", "trending"],
    },
    {
      name: "Mens Slim Fit Jeans - Washed Blue",
      price: 1299,
      category: "Men",
      description:
        "Comfort-stretch denim with a modern slim fit, ideal for day-to-night transitions.",
      image:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=600&q=80",
      tags: ["denim", "trending", "everyday"],
    },
    {
      name: "Mens Geometric Print Shirt",
      price: 849,
      category: "Men",
      description:
        "A lightweight shirt with a bold geometric pattern, great for summer parties or vacations.",
      image:
        "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=600&q=80",
      tags: ["summer", "printed", "party-wear"],
    },
    {
      name: "Womens Floral Maxi Dress - Coral",
      price: 999,
      category: "Women",
      description:
        "A flowing maxi dress in coral with a vibrant floral print – perfect for brunches or beach days.",
      image:
        "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&w=600&q=80",
      tags: ["summer", "floral", "bohemian"],
    },
    {
      name: "Womens Embroidered Kurti - Turquoise",
      price: 1199,
      category: "Women",
      description:
        "A chic cotton kurti with delicate embroidery and a straight fit, ideal for ethnic-chic style.",
      image:
        "https://images.pexels.com/photos/2531555/pexels-photo-2531555.jpeg?auto=compress&w=600&q=80",
      tags: ["ethnic", "trending", "festive"],
    },
    {
      name: "Womens Denim Jacket - Light Blue",
      price: 1599,
      category: "Women",
      description:
        "A light washed denim jacket with a relaxed fit, perfect for layering in cooler weather.",
      image:
        "https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&w=600&q=80",
      tags: ["layering", "denim", "new-arrival"],
    },
    {
      name: "Kids Graphic T-Shirt - Red",
      price: 499,
      category: "Kids",
      description:
        "A vibrant red tee featuring a fun cartoon graphic, made from soft cotton for all-day play.",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=600&q=80",
      tags: ["kids", "graphic", "playtime"],
    },
    {
      name: "Kids Fit-and-Flare Dress - Pink",
      price: 699,
      category: "Kids",
      description:
        "A cute pink dress with a flared skirt and floral print, perfect for birthday parties and outings.",
      image:
        "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&w=600&q=80",
      tags: ["girls", "floral", "occasion"],
    },
    {
      name: "Kids Stretchy Jeans - Indigo",
      price: 799,
      category: "Kids",
      description:
        "Soft indigo denim jeans with a bit of stretch for comfort, ideal for school or casual play.",
      image:
        "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&w=600&q=80",
      tags: ["kids", "denim", "comfortable"],
    }
  ]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
