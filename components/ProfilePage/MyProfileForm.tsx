"use client";

import React from "react";
import Avatar from "./Avatar";

const MyProfileForm = () => {
  return (
    <form className="bg-neutral-100 w-full min-h-[40vh] h-max rounded-3xl flex flex-col gap-4 p-10">
      <div className="flex items-center gap-6 mb-8">
        <Avatar />
        <UserDescription />
      </div>

      <div className="flex jutify-between items-center gap-4">
        <input
          className="h-16 w-1/2 bg-neutral-200 rounded-lg p-4 text-2xl placeholder:text-xl"
          placeholder="Имя"
        />
        <input
          className="h-16 w-1/2 bg-neutral-200 rounded-lg text-2xl placeholder:text-xl p-4"
          placeholder="Фамилия"
        />
      </div>

      <div className="flex jutify-between items-center gap-4">
        <input
          className="h-16 w-1/2 bg-neutral-200 rounded-lg text-2xl placeholder:text-xl p-4"
          placeholder="Телефон"
        />
        <input
          className="h-16 w-1/2 bg-neutral-200 rounded-lg text-2xl placeholder:text-xl p-4"
          placeholder="Электронная почта"
        />
      </div>

      <div className="flex jutify-between items-center gap-4">
        <input
          className="h-16 w-1/2 bg-neutral-200 rounded-lg text-2xl placeholder:text-xl p-4"
          placeholder="Дата рождения"
        />
        <input
          className="h-16 w-1/2 bg-neutral-200 rounded-lg text-2xl placeholder:text-xl p-4"
          placeholder="Никнейм"
        />
      </div>

      <div className="flex justify-between items-start mt-8">
        <ProfileFormAction />
      </div>
    </form>
  );
};

export default MyProfileForm;

const UserDescription = ({
  name = "John Dow",
  regisrtrationDate = "16.11.2024",
}) => {
  return (
    <div className="text-2xl">
      <span className="font-bold">{name}</span>
      <p className="text-base opacity-60">{`Дата регистрации: ${regisrtrationDate}`}</p>
    </div>
  );
};

const ProfileFormAction = () => {
  return (
    <>
      <div className="gap-4 flex">
        <button
          type="button"
          className="px-4 py-3 text-base bg-neutral-200 rounded-xl transition-colors hover:bg-neutral-300"
        >
          Выйти
        </button>
        <button
          type="button"
          className="px-4 py-3 text-base bg-neutral-200 rounded-xl transition-colors hover:bg-neutral-300"
        >
          Сменить пароль
        </button>
      </div>

      <button
        className="text-red-500 text-sm transition-colors hover:text-red-300"
        type="button"
      >
        Удалить профиль
      </button>
    </>
  );
};
