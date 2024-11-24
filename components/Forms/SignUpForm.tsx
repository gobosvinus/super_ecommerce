import React, { useState } from "react";
import { FaGoogle, FaVk } from "react-icons/fa6";

export enum FormMode {
  SIGN_IN = "sign-in",
  SIGN_UP = "sign-up",
}

const activeButtonStyle =
  "text-center text-white bg-orange-500 rounded-3xl px-4 py-2";
const passiveButtonStyle =
  "text-center text-orange-500 rounded-3xl px-4 py-2 border border-orange-500 hover:bg-neutral-200 hover:border-orange-500/0";

const SignUpForm = ({ mode = FormMode.SIGN_UP }: { mode: FormMode }) => {
  const [formMode, setFormMode] = useState<FormMode>(mode);

  const handleSetFormMode = (mode: FormMode) => {
    if (mode === FormMode.SIGN_IN) {
      setFormMode(FormMode.SIGN_IN);
    } else {
      setFormMode(FormMode.SIGN_UP);
    }
  };

  return (
    <form className="font-secondary flex flex-col justify-between p-5 gap-8 max-size-full">
      {/* Selecting either Sign In or Sign Up */}
      <div className="flex gap-6 justify-center mt-10 text-2xl">
        <button
          type="button"
          onClick={() => handleSetFormMode(FormMode.SIGN_IN)}
          className={`${
            formMode === FormMode.SIGN_UP
              ? passiveButtonStyle
              : activeButtonStyle
          }`}
        >
          Войти
        </button>
        <button
          type="button"
          onClick={() => handleSetFormMode(FormMode.SIGN_UP)}
          className={`${
            formMode === FormMode.SIGN_UP
              ? activeButtonStyle
              : passiveButtonStyle
          }`}
        >
          Создать аккаунт
        </button>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2 text-2xl">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="pavel_durov@vk.ru"
          className="w-full h-14 bg-neutral-200 p-3 rounded-2xl overflow-hidden"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2 text-2xl">
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="text"
          placeholder="some password here"
          className="w-full h-14 bg-neutral-200 p-3 rounded-2xl overflow-hidden"
        />
      </div>

      {/* Remember me chekbock and forgot password */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="checkbox"
            className="hover:cursor-pointer"
          />
          <label htmlFor="checkbox" className="text-base hover:cursor-pointer">
            Запомнить меня
          </label>
        </div>

        <span className="text-base transition-opacity hover:opacity-60 hover:cursor-pointer">
          Забыли пароль?
        </span>
      </div>

      {/* Кнопка отправки */}
      <button
        type="button"
        className="bg-orange-500 rounded-3xl px-5 py-2 text-2xl text-white transition-colors hover:bg-orange-500/50"
      >
        {formMode === FormMode.SIGN_UP ? "Создать аккаунт" : "Войти"}
      </button>

      {/* Или войти с помощью */}
      <div className="flex gap-2 justify-between items-center text-base">
        <div className="h-[2px] w-full bg-black/20" />
        <span className="text-nowrap">или войти с помощью</span>
        <div className="h-[2px] w-full bg-black/20" />
      </div>

      {/* Sign up with Vk and Google */}
      <div className="flex justify-between gap-4 text-3xl">
        <button
          type="button"
          className="flex gap-2 items-center bg-blue-600 text-white rounded-3xl px-5 py-2 transition-colors hover:bg-blue-600/50"
        >
          <FaVk className="text-4xl" />
          with VK
        </button>
        <button
          type="button"
          className="flex gap-2 items-center bg-red-600 text-white rounded-3xl px-5 py-2 transition-colors hover:bg-red-600/50"
        >
          <FaGoogle className="text-3xl" />
          with Google
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
