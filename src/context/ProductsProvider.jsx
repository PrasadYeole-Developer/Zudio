import React, { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Men’s Classic Polo Tee - Navy",
      price: 599,
      category: "Men",
      description:
        "A soft cotton polo shirt in deep navy, perfect for casual outings or weekend style.",
      image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      tags: ["casual", "summer", "trending"],
    },
    {
      name: "Men’s Slim Fit Jeans - Washed Blue",
      price: 1299,
      category: "Men",
      description:
        "Comfort-stretch denim with a modern slim fit, ideal for day-to-night transitions.",
      image: "https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg",
      tags: ["denim", "trending", "everyday"],
    },
    {
      name: "Men’s Geometric Print Shirt",
      price: 849,
      category: "Men",
      description:
        "A lightweight shirt with a bold geometric pattern, great for summer parties or vacations.",
      image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg",
      tags: ["summer", "printed", "party-wear"],
    },
    {
      name: "Women’s Floral Maxi Dress - Coral",
      price: 999,
      category: "Women",
      description:
        "A flowing maxi dress in coral with a vibrant floral print – perfect for brunches or beach days.",
      image: "https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg",
      tags: ["summer", "floral", "bohemian"],
    },
    {
      name: "Women’s Embroidered Kurti - Turquoise",
      price: 1199,
      category: "Women",
      description:
        "A chic cotton kurti with delicate embroidery and a straight fit, ideal for ethnic-chic style.",
      image: "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg",
      tags: ["ethnic", "trending", "festive"],
    },
    {
      name: "Women’s Denim Jacket - Light Blue",
      price: 1599,
      category: "Women",
      description:
        "A light washed denim jacket with a relaxed fit, perfect for layering in cooler weather.",
      image: "https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg",
      tags: ["layering", "denim", "new-arrival"],
    },
    {
      name: "Kids’ Graphic T-Shirt - Red",
      price: 499,
      category: "Kids",
      description:
        "A vibrant red tee featuring a fun cartoon graphic, made from soft cotton for all-day play.",
      image: "https://images.pexels.com/photos/1648376/pexels-photo-1648376.jpeg",
      tags: ["kids", "graphic", "playtime"],
    },
    {
      name: "Kids’ Fit-and-Flare Dress - Pink",
      price: 699,
      category: "Kids",
      description:
        "A cute pink dress with a flared skirt and floral print, perfect for birthday parties and outings.",
      image: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg",
      tags: ["girls", "floral", "occasion"],
    },
    {
      name: "Kids’ Stretchy Jeans - Indigo",
      price: 799,
      category: "Kids",
      description:
        "Soft indigo denim jeans with a bit of stretch for comfort, ideal for school or casual play.",
      image: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
      tags: ["kids", "denim", "comfortable"],
    },
    {
      name: "Unisex Fashion Backpack - Mustard",
      price: 699,
      category: "Accessories",
      description:
        "A trendy mustard-yellow backpack with multiple pockets and adjustable straps for everyday use.",
      image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
      tags: ["accessory", "travel", "trending"],
    },
    {
      name: "Heart-Shaped Sunglasses - Black",
      price: 299,
      category: "Accessories",
      description:
        "Fun black sunglasses with heart-shaped frames – a playful accessory to elevate any outfit.",
      image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
      tags: ["summer", "fashion", "budget-friendly"],
    },
    {
      name: "Beaded Pendant Necklace - Multicolor",
      price: 249,
      category: "Accessories",
      description:
        "A boho-chic multicolor beaded necklace with a metal pendant, perfect for adding a pop of color.",
      image: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg",
      tags: ["ethnic", "vibrant", "new-arrival"],
    },
    {
      name: "Men’s Casual Sneakers - White",
      price: 1299,
      category: "Footwear",
      description:
        "Classic white sneakers with cushioned soles, versatile enough for any casual outfit.",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      tags: ["comfortable", "sporty", "trending"],
    },
    {
      name: "Women’s Strappy Sandals - Tan",
      price: 899,
      category: "Footwear",
      description:
        "Open-toe tan sandals with ankle straps, perfect for summer days and evening outings.",
      image: "https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg",
      tags: ["summer", "casual", "footwear"],
    },
    {
      name: "Kids’ Slip-On Sandals - Blue",
      price: 499,
      category: "Footwear",
      description:
        "Easy-slip blue sandals for kids, featuring adjustable straps and a non-slip sole for safety.",
      image: "https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg",
      tags: ["kids", "easy-wear", "playtime"],
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
