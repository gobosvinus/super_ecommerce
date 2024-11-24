import React from "react";
import { CiSearch } from "react-icons/ci";
import SignInButton from "./SignInButton";
import CartIcon from "../UI/CartIcon";

const UserActions = () => {
  return (
    <div className="flex gap-12 w-max place-self-end self-stretch justify-between items-center">
      <div className="flex gap-6">
        <CiSearch />
        <CartIcon />
      </div>
      <SignInButton />
    </div>
  );
};

export default UserActions;
