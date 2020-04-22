import React from "react";
import { Link, useHistory } from "react-router-dom";
import { signout, isAuthenticated } from "../../utils/auth";
import { itemTotal } from "../../utils/cartHelpers";
import "./style.css";

function NavMenu(props) {

  const location = props.location;
  const history = useHistory();

  return (
    <div className="navbar-menu">
      <div className="navbar-end">
        <Link to="/store" className={location.pathname === "/store" ? "navbar-item is-active" : "navbar-item"}>
          Store
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "navbar-item is-active" : "navbar-item"}>
          Contact  
        </Link>
        {isAuthenticated() && isAuthenticated().user.role === "Customer" && (
          <Link to="/account" className={location.pathname === "/account" ? "navbar-item is-active" : "navbar-item"}>
            Account
          </Link>
        )}
        {isAuthenticated() && isAuthenticated().user.role === "Admin" && (
          <Link to="/admin" className={location.pathname === "/admin" ? "navbar-item is-active" : "navbar-item"}>
            Admin
          </Link>
        )}
        <Link to="/cart" className={location.pathname === "/cart" ? "navbar-item is-active" : "navbar-item"}>
        <i className="fas fa-shopping-cart"></i> <sup><small className="cart-badge">{itemTotal() ? itemTotal() : ""}</small></sup>
        </Link>
        {!isAuthenticated() && (
          <Link to="/signin" className={location.pathname === "/signin" ? "navbar-item is-active" : "navbar-item"}>
            <button className="button is-danger is-small">Sign In</button>
          </Link>
        )}
        {isAuthenticated() && (
          <div className="navbar-item">
            <button
              className="button is-danger is-small"
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavMenu;