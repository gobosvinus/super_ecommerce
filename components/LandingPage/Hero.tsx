import React from "react";

import Carusel from "../Carusel/Carusel";
import TeleportButton from "../Buttons/TeleportButton";
import CreateAccountButton from "../Buttons/CreateAccountButton";

const Hero = () => {
  return (
    <section className="container text-black h-screen xl:pt-40 lg:pt-96 pt-96 md:pt-64 pb-20 relative ">
      {/* Заголовок */}
      <h1 className="flex flex-col gap-8 pt-64">
        <span className="uppercase font-main font-bold 2xl:text-8xl bg-gradient-to-br from-orange-500 to-purple-600 text-transparent bg-clip-text lg:text-7xl md:text-7xl">
          go shopping
          <br /> with us!
        </span>
        <span className="xl:text-4xl text-purple-700 lg:text-3xl">
          <span className="relative font-bold text-orange-500 after:h-11 after:w-36 after:bg-white after:inline-block after:absolute after:-skew-y-6 after:-left-4 after:-z-10 after:bottom-0">
            SUPER
          </span>{" "}
          - место, в котором найдется все...
        </span>
      </h1>

      {/* Кнопки под заголовком */}
      <div className="flex gap-3 w-max items-center text-2xl mt-5">
        <TeleportButton text="к покупкам" />
        <CreateAccountButton />
      </div>

      {/* <div className="absolute h-[40%] w-[50%] bg-neutral-600 top-[15%] right-0 rounded-lg">
    
      </div> */}
      <Carusel />
      <div className="absolute h-[400px] w-[4300px] bg-slate-400 skew-y-[35deg] -z-10 left-0 top-[70%] translate-y-1/2" />
    </section>
  );
};

export default Hero;
