import React from "react";
import { useLocation } from "react-router-dom";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";

function Navbar() {

  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <NavBrand location={location}/>
          <NavMenu location={location}/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;