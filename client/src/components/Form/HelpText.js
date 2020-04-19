import React from "react";

function HelpText(props) {

  return (
    <>
      {props.toggle ? <p className={"help is-size-5 " + props.color}>{props.children}</p> : <></>}
    </>
  );
}

export default HelpText;