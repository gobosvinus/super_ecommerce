"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavbarTabsData } from "@/static/navbar";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="text-base text-black font-secondary tracking-widest font-bold lowercase place-self-center">
      <ul className="flex gap-12 whitespace-nowrap">
        {NavbarTabsData.map((tab) => {
          return (
            <Link href={tab.href} key={tab.id}>
              <li
                className={`${
                  pathname === tab.href ? "bg-neutral-300 text-slate-950" : ""
                } ease-in-out transition-all border-white duration-300 hover:bg-neutral-300 hover:cursor-pointer p-2 rounded-lg`}
              >
                {tab.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
