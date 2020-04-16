import React from "react";
import { Link } from "react-router-dom";

function HelpText(props) {

  const { error, success } = props;

  const showHelp = () => {
    if (error) {
      return (
        <p className="help is-danger is-size-5">{error}</p>
      );
    } else if (success) {
      return (
        <p className="help is-success is-size-5">New account created. Please <Link to="/signin">Sign In</Link>.</p>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      {showHelp()}
    </>
  );
}

export default HelpText;