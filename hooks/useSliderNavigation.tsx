import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function useSliderNavigation(length: number) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string | null>(null);

  const handleNextSlide = () => {
    if (activeIndex + 1 >= length) return;
    setActiveIndex((p) => p + 1);
    setDirection("right");
  };

  const handlePreviousSlide = () => {
    if (activeIndex === 0) return;

    setActiveIndex((p) => p - 1);
    setDirection("left");
  };

  return [activeIndex, handleNextSlide, handlePreviousSlide, direction] as [
    activeIndex: number,
    handleNextSlide: () => void,
    handlePreviousSlide: () => void,
    direction: string | null
  ];
}
