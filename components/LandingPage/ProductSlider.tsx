import React from "react";
import AnimationLogics from "./AnimationLogics";

async function fetchProducts() {
  const res = await fetch(`http://localhost:3000/api/products/`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

const ProductSlider = async () => {
  const products = await fetchProducts();

  return <AnimationLogics products={products} />;
};

export default ProductSlider;
