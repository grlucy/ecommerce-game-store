import React from "react";

function AuthContext() {

  return (
    <div className="navbar-item">
      <button className="button is-danger is-small" onClick={() => window.open("/signin", "_self")}>Sign In</button>
    </div>
  );
}

export default AuthContext;