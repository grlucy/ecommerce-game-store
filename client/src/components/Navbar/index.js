import React from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";

function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <NavBrand />
          <NavMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;