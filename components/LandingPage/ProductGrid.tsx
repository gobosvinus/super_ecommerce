import React from "react";
import ProductCard, { ProductCardProps } from "./ProductCard";

const ProductGrid = ({ products }: { products: ProductCardProps[] }) => {
  return (
    <div
      className="w-full h-full gap-8 justify-center"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 0.3fr))",
      }}
    >
      {products &&
        products.map((product) => {
          return <ProductCard key={product.name} {...product} />;
        })}
    </div>
  );
};

export default ProductGrid;
