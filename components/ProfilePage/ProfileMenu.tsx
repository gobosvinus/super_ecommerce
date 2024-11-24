import Link from "next/link";
import React from "react";

const ProfileMenu = () => {
  return (
    <aside className="bg-neutral-100 rounded-3xl w-[300px] p-5">
      <ul className="flex flex-col text-2xl gap-2 text-black/60">
        <Link href={"/"}>
          <li className="transition-colors hover:text-black/100 hover:cursor-pointer">
            Избранное
          </li>
        </Link>
        <Link href={"/"}>
          <li className="transition-colors hover:text-black/100 hover:cursor-pointer">
            Заказы
          </li>
        </Link>
        <Link href={"/"}>
          <li className="transition-colors hover:text-black/100 hover:cursor-pointer">
            Отзывы
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default ProfileMenu;
