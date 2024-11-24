"use client";

import React from "react";
import { createPortal } from "react-dom";
import SignUpForm, { FormMode } from "../Forms/SignUpForm";
import useOpenModal from "@/hooks/useOpenModal";
import Modal from "../UI/Modal";

const SignInButton = () => {
  // Используем кастомный хук,
  // чтобы контролировать открытие модального окна
  const [isClient, isModalShown, handleShowModal] = useOpenModal();

  if (!isClient)
    return (
      <>
        <button
          onClick={handleShowModal}
          className="text-2xl border-b-2 pb-1 border-orange-500 hover:scale-105 hover:cursor-pointer ease-in-out duration-50 transition-transform"
        >
          Войти
        </button>
      </>
    );

  return (
    <>
      <button
        onClick={handleShowModal}
        className="text-2xl border-b-2 pb-1 border-orange-500 hover:scale-105 hover:cursor-pointer ease-in-out duration-50 transition-transform"
      >
        Войти
      </button>
      {isModalShown &&
        createPortal(
          <Modal isOpen={isModalShown} onClose={handleShowModal}>
            <SignUpForm mode={FormMode.SIGN_IN} />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default SignInButton;
