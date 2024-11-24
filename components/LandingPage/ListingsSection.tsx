import React, { Suspense } from "react";
import ProductSlider from "./ProductSlider";

const ListingsSection = () => {
  return (
    <section className="min-h-screen backdrop-filter backdrop-blur-xl bg-gradient-to-b from-neutral-100 via-orange-200 to-orange-200">
      <h2 className="font-secondary text-5xl text-orange-500 font-bold pt-10 container">
        Новинки
      </h2>

      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <ProductSlider />
      </Suspense>
    </section>
  );
};

export default ListingsSection;
