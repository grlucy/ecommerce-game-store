import React from "react";
import "./style.css";

function ContentWrapper(props) {

  return (
    <div className="content-wrapper">
      {props.children}
    </div>
  );
}

export default ContentWrapper;