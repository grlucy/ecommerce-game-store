import React from "react";
import Logo from "./Logo";
import Burger from "./Burger";

function NavBrand() {

  return (
    <>
      <div className="navbar-brand">
        <Logo />
        <Burger />
      </div>
      <input type="checkbox" id="nav-toggle-state" />
      {/* ^ Necessary for burger functionality */}
    </>
  );
}

export default NavBrand;