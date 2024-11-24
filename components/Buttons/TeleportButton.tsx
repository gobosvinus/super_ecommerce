"use client";

import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { handleTeleportToId } from "@/lib/utils";

const TeleportButton = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => {
        handleTeleportToId("goods");
      }}
      className="flex items-center opacity-50 transition-all duration-200 hover:opacity-100"
    >
      <span>{text}</span>
      <FaLongArrowAltDown />
    </button>
  );
};

export default TeleportButton;
