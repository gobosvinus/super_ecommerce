"use client";

import { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { RegistrationModalTransition } from "@/static/animationTransition";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Open the modal if isOpen prop is true
  useEffect(() => {
    if (!dialogRef.current) return;
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  // Handle closing the modal
  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <motion.dialog
      initial={{ y: "200%" }}
      animate={{ y: "0%" }}
      transition={RegistrationModalTransition}
      exit={{ y: "200%" }}
      ref={dialogRef}
      onClose={handleClose}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-sm grid place-items-center rounded-3xl"
    >
      <div className="h-max w-max relative">
        {children}
        <button
          onClick={handleClose}
          className="absolute right-[10px] top-[10px] z-50 text-4xl text-black/40 hover:text-black/100 transition-color duration-200"
        >
          <RxCross1 />
        </button>
      </div>
    </motion.dialog>
  );
};

export default Modal;
