"use client";

import React, { useEffect, useRef, useState } from "react";
import { PiCamera, PiUser } from "react-icons/pi";

const Avatar = () => {
  const [isAvatarClicked, setIsAvatarClicked] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Логика закрытия оверлея
  const handleDeClickOverlay = (
    e: MouseEvent,
    elementRef: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    if (!elementRef.current) return;
    const { clientX, clientY } = e;

    const {
      x: elementX1,
      y: elementY1,
      width,
      height,
    } = elementRef.current.getBoundingClientRect();

    const elementX2 = elementX1 + width;
    const elementY2 = elementY1 + height;

    if (
      clientX < elementX1 ||
      clientX > elementX2 ||
      clientY < elementY1 ||
      clientY > elementY2
    ) {
      setIsAvatarClicked((p) => !p);
    }
  };

  const handleWindowClick = (e: MouseEvent) =>
    handleDeClickOverlay(e, overlayRef);

  const handleAvatarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Предотвращаем распространение события на последую
    e.stopPropagation();
    setIsAvatarClicked((p) => !p);
  };

  useEffect(() => {
    if (!isAvatarClicked) return;

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [isAvatarClicked]);

  return (
    <div className="relative">
      <div
        onClick={handleAvatarClick}
        className="rounded-full grid place-items-center bg-neutral-200 p-5 hover:cursor-pointer hover:bg-neutral-600 group transition-colors duration-200"
      >
        <PiUser className="text-[80px]" />
        <div className="absolute p-2 rounded-full bg-neutral-100 -right-[8%] bottom-[0%]">
          <PiCamera className="group-hover:text-orange-500 transition-colors duration-200" />
        </div>
      </div>

      {/* Overlay with actions: Delet or Change */}
      {isAvatarClicked && (
        <div
          ref={overlayRef}
          className="bg-neutral-100 rounded-lg text-xl text-black flex flex-col gap-4 p-5 absolute -bottom-[100%] shadow-2xl -left-[4%] border border-black/20"
        >
          <FileUploadButton />

          <button
            className="text-red-500 hover:opacity-40 transition-opacity duration-200"
            type="button"
          >
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;

const FileUploadButton = () => {
  const handleClick = () => {
    const fileInput = document.getElementById("avatar") as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <form>
      <input
        type="file"
        id="avatar"
        name="avatar"
        style={{ display: "none" }}
      />
      <button
        type="button"
        className="hover:opacity-40 transition-opacity duration-200"
        onClick={handleClick}
      >
        Изменить
      </button>
    </form>
  );
};
