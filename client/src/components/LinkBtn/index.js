import React from "react";
import { Link } from "react-router-dom";

function LinkBtn(props) {

  return (
    <Link to={props.route}>
      <button className="button is-danger is-small is-outlined">{props.children}</button>
    </Link>
  );
}

export default LinkBtn;