import React from "react";
import StoreLink from "./StoreLink";
import ContactLink from "./ContactLink";
import CartLink from "./CartLink";
import AuthContext from "./AuthContext";

function NavMenu() {

  return (
    <div className="navbar-menu">
      <div className="navbar-end">
        <StoreLink />
        <ContactLink />
        <CartLink />
        <AuthContext />
      </div>
    </div>
  );
}

export default NavMenu;