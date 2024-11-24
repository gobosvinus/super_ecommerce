import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

const Numbering = ({
  amount,
  className,
  active,
  handleNext,
  handlePrev,
}: {
  amount: number;
  className?: string;
  active: number;
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  return (
    <div className={twMerge("absolute flex gap-2 items-center", className)}>
      <FiArrowLeft
        onClick={handlePrev}
        className="text-4xl hover:cursor-pointer hover:scale-110 transition-transform duration-100 text-purple-600"
      />
      {Array.from({ length: amount }).map((_, index) => {
        return <BulletPoint id={index + 1} active={active} key={index} />;
      })}
      <FiArrowRight
        onClick={handleNext}
        className="text-4xl hover:cursor-pointer hover:scale-110 transition-transform duration-100 text-purple-600"
      />
    </div>
  );
};

export default Numbering;

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
