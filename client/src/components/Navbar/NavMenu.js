import React from "react";
import { Link } from "react-router-dom";

function NavMenu(props) {

  const location = props.location;

  return (
    <div className="navbar-menu">
      <div className="navbar-end">
        <Link to="/store" className={location.pathname === "/store" ? "navbar-item is-active" : "navbar-item"}>
          Store
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "navbar-item is-active" : "navbar-item"}>
          Contact  
        </Link>
        <Link to="/cart" className={location.pathname === "/cart" ? "navbar-item is-active" : "navbar-item"}>
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link to="/signin" className={location.pathname === "/signin" ? "navbar-item is-active" : "navbar-item"}>
          <button className="button is-danger is-small">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default NavMenu;