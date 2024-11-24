"use client";

import useOpenModal from "@/hooks/useOpenModal";
import React from "react";
import { createPortal } from "react-dom";
import SignUpForm, { FormMode } from "../Forms/SignUpForm";
import Modal from "../UI/Modal";

const CreateAccountButton = () => {
  const [isClient, isModalShown, handleShowModal] = useOpenModal();

  if (!isClient)
    return (
      <>
        <button
          onClick={handleShowModal}
          className="rounded-full bg-orange-500 px-4 py-1 text-white text-2xl transition-all hover:scale-105"
        >
          Создать аккаунт
        </button>
      </>
    );

  return (
    <>
      <button
        onClick={handleShowModal}
        className="rounded-full bg-orange-500 px-4 py-1 text-white text-2xl transition-all hover:scale-105"
      >
        Создать аккаунт
      </button>

      {isModalShown &&
        createPortal(
          <Modal isOpen={isModalShown} onClose={handleShowModal}>
            <SignUpForm mode={FormMode.SIGN_UP} />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default CreateAccountButton;
