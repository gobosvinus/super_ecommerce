"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import Image from "next/image";

const Carusel = ({ children }: { children?: React.ReactNode }) => {
  const [slides, setSlides] = useState([Slides[0]]);
  const [activeSlide, setIsActiveSlide] = useState(1);

  const handleMoveCard = (direction: string) => {
    if (direction === "right" && activeSlide < Slides.length) {
      setIsActiveSlide((p) => p + 1);
      setSlides((prev) => {
        return Slides.slice(0, activeSlide + 1);
      });
    } else if (direction === "right" && activeSlide === Slides.length) {
      setIsActiveSlide(1);
      setSlides((prev) => {
        return Slides.slice(0, 1);
      });
    } else if (direction === "left" && activeSlide > 1) {
      setIsActiveSlide((p) => p - 1);
      setSlides((prev) => {
        return prev.slice(0, -1);
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => handleMoveCard("right"), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [slides]);

  return (
    <motion.div
      initial={{ x: "0%" }}
      animate={{ x: "0%" }}
      exit={{ x: "200%" }}
      transition={{ duration: 1, stiffness: 200, damping: 50 }}
      // h-[40%] w-[50%] bg-neutral-600 2xl:top-[25%] xl:top-[30%] lg:top-[10%] lg:w-[80%] lg:right-0 lg:left-0 right-0
      className="absolute top-[20%] h-[30%] w-[96%] left-0 right-0 mx-auto rounded-3xl overflow-hidden md:top-[10%] lg:top-[10%] lg:h-[40%] xl:h-[40%] xl:w-[50%] xl:top-[25%] xl:ml-[50%]"
    >
      {/* Стрелка влево */}
      <div
        className="group absolute left-[1%] top-1/2 z-[45] grid size-max -translate-y-1/2 place-items-center hover:cursor-pointer"
        onClick={() => handleMoveCard("left")}
      >
        <motion.div
          initial={{ x: 0 }}
          whileTap={{ x: -4 }}
          transition={{ duration: 0.2 }}
          style={{
            zIndex: 5,
            gridRow: 1,
            gridColumn: 1,
          }}
        >
          <PiArrowLeft className="text-6xl text-purple-600" />
        </motion.div>
        <div
          className="size-[50px] rounded-full bg-white/0 transition-all duration-300 group-hover:bg-purple-600/20"
          style={{
            zIndex: 4,
            gridRow: 1,
            gridColumn: 1,
          }}
        />
      </div>

      <AnimatePresence>
        {slides.map((slide, index) => {
          return <div key={index}>{slide}</div>;
        })}
      </AnimatePresence>

      {/* Стрелка вправо */}
      <div
        className="group absolute right-[1%] top-1/2 z-[45] grid size-max -translate-y-1/2 place-items-center hover:cursor-pointer"
        onClick={() => handleMoveCard("right")}
      >
        <motion.div
          initial={{ x: 0 }}
          whileTap={{ x: 4 }}
          transition={{ duration: 0.2 }}
          style={{
            zIndex: 5,
            gridRow: 1,
            gridColumn: 1,
          }}
        >
          <PiArrowRight className="text-6xl text-purple-600" />
        </motion.div>
        <div
          className="size-[50px] rounded-full bg-white/0 transition-all duration-300 group-hover:bg-purple-600/20"
          style={{
            zIndex: 4,
            gridRow: 1,
            gridColumn: 1,
          }}
        />
      </div>

      {/* Нумерация снизу */}
      <Numbering
        amount={Slides.length}
        className="bottom-[2%] left-1/2 -translate-x-1/2"
        active={activeSlide}
      />
    </motion.div>
  );
};

export default Carusel;

const Numbering = ({
  amount,
  className,
  active,
}: {
  amount: number;
  className?: string;
  active: number;
}) => {
  return (
    <div className={twMerge("absolute flex gap-2", className)}>
      {Array.from({ length: amount }).map((_, index) => {
        return <BulletPoint id={index + 1} active={active} key={index} />;
      })}
    </div>
  );
};

const BulletPoint = ({ id, active }: { id: number; active: number | null }) => {
  return (
    <div
      className={`size-2 rounded-full bg-purple-600 transition-all duration-300 ${
        active === id ? "scale-[1.75]" : "opacity-50"
      }`}
      key={id}
    />
  );
};

const Slide = ({
  className,
  children,
  active,
  isFirst,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  isFirst?: boolean;
}) => {
  return (
    <motion.div
      initial={{ x: isFirst ? "0%" : "200%" }}
      animate={{ x: "0%" }}
      exit={{ x: "200%" }}
      transition={{
        duration: 0.5,
        stiffness: 200,
        damping: 50,
      }}
      className={twMerge(
        "absolute inset-0 transition-all duration-1000 ease-out rounded-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const Slides = [
  <Slide className="" isFirst={true}>
    <Image
      fill
      alt="hero img"
      src="/assets/hero-1.jpg"
      className="rounded-lg spect-square object-cover"
    />
  </Slide>,
  <Slide className="">
    <Image fill alt="hero img" src="/assets/hero-2.jpg" />
  </Slide>,
  <Slide className="">
    <Image fill alt="hero img" src="/assets/hero-3.jpg" />
  </Slide>,
  <Slide className="">
    <Image fill alt="hero img" src="/assets/hero-4.jpg" />
  </Slide>,
  <Slide className="">
    <Image fill alt="hero img" src="/assets/hero-5.jpg" />
  </Slide>,
];
