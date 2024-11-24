"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ProductGrid from "./ProductGrid";
import Numbering from "../UI/Numbering";
import useSliderNavigation from "@/hooks/useSliderNavigation";
import { ProductCardProps } from "./ProductCard";
import { chunkArray } from "@/lib/utils";

const AnimationLogics = ({ products }: { products: ProductCardProps[] }) => {
  // подготавливаем слайды с продуктами
  const slides = chunkArray(products, 8);

  // Вся логика со слайдером помещена в кастомный хук. Очень удобно
  const [activeIndex, handleNextSlide, handlePreviousSlide, direction] =
    useSliderNavigation(slides.length);

  // Динамически в зависимости от направления выбираем позицию начала анимации
  // и позицию выхода
  const variants = {
    exit: (direction: string | null) => ({
      x: direction === "left" ? "200%" : "-200%",
    }),
    enter: (direction: string | null) => ({
      x: direction === "left" ? "-200%" : "200%",
    }),
    visible: { x: "0%" },
  };

  return (
    <>
      <div className="container min-h-full max-h-max relative">
        {/* Анимация гридов с товарами */}
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            variants={variants}
            key={activeIndex}
            initial="enter"
            animate="visible"
            exit="exit"
            custom={direction}
            className="pt-20"
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            {<ProductGrid products={slides[activeIndex]} />}
            {/* {slides && slides[activeIndex].map((slide, index) => {
          return (
            <ProductGrid products={slide} key={index} />
          )
        })} */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Нумерация и стрелки для перелистывания */}
      <Numbering
        amount={slides.length}
        active={activeIndex + 1}
        handleNext={handleNextSlide}
        handlePrev={handlePreviousSlide}
        className="bottom-[1.5%] left-1/2 -translate-x-1/2"
      />
    </>
  );
};

export default AnimationLogics;
