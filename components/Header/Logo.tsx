import Link from "next/link";
import React from "react";

const gradientClasses =
  "text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-purple-600 uppercase";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex flex-col place-self-start self-center lg:text-3xl md:text-base hover:cursor-pointer">
        <div className="font-bold">
          {Array.from("super").map((char, index) => {
            return (
              <span key={index} className={gradientClasses}>
                {char}
              </span>
            );
          })}
        </div>
        <span className="text-orange-500 font-semibold">E-Commerce</span>
      </div>
    </Link>
  );
};

export default Logo;
