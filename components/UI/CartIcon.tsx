import Link from "next/link";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartIcon = () => {
  return (
    <Link href={"/cart"}>
      <div className="relative size-max hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer place-self-end self-center group">
        <MdOutlineShoppingCart className="text-4xl text-black" />
        <CartAmount length={0} />
      </div>
    </Link>
  );
};

export default CartIcon;

const CartAmount = ({ length }: { length?: number }) => {
  if (!length) return null;
  return (
    <div className="-top-2 -right-2 grid place-items-center size-content size-[25px] rounded-full bg-orange-500 absolute group-hover:rotate-[360deg] transition-all duration-600 ease-in-out ">
      <span className="text-[14px] leading-4 text-white font-bold">
        {length}
      </span>
    </div>
  );
};
