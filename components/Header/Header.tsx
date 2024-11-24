import React from "react";
import Logo from "./Logo";
import UserActions from "./UserActions";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-neutral-100 py-2 drop-shadow-custom fixed left-0 right-0 z-50 h-max">
      <div className="container grid grid-cols-3">
        <Logo />
        <Navbar />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
