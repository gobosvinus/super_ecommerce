import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  description: string | null;
  image: string | null;
};

const ProductCard = ({
  name,
  price,
  description,
  image,
  id,
}: ProductCardProps) => {
  return (
    <article className="w-full bg-neutral-100 h-[500px] rounded-3xl drop-shadow-xl hover:scale-105 transition-transform duration-200 p-4 hover:cursor-pointer flex flex-col justify-between">
      <div className="w-full h-[50%] bg-transparent rounded-3xl relative">
        <Image
          fill
          alt="card img"
          src={image}
          className="object-fit rounded-3xl"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="text-black text-2xl">{name}</p>
          <span className="text-orange-500 text-2xl text-right">{`${
            price ? price : ""
          } руб.`}</span>
        </div>
        <p className="text-black/50 font-secondary text-base mt-5 ">
          {description}
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="grid place-items-center rounded-full bg-orange-500  transform-all bg-orange-500/20 hover:cursor-pointer p-2">
            <FaMinus className="text-2xl text-orange-500" />
          </div>

          <span className="text-2xl text-orange-500">1</span>
          <div className="grid place-items-center rounded-full bg-orange-500  transform-all bg-orange-500/20 hover:cursor-pointer p-2">
            <FaPlus className="text-2xl text-orange-500" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button className="rounded-2xl text-white bg-orange-500 px-6 py-3 text-base transition-color hover:opacity-60">
            В корзину
          </button>
          <Link href={`/products/${id}`} className="text-sm self-end ">
            <span className="opacity-40 transition-opacity duration-200 hover:cursor-pointer hover:opacity-100">
              подробнее
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
