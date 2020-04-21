import React from "react";

function HelpText(props) {

  return (
    <>
      {props.toggle ? <p className={"help is-size-" + props.textSize + " has-text-centered " + props.color}>{props.children}</p> : <></>}
    </>
  );
}

export default HelpText;