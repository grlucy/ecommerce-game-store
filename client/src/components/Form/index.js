import React from "react";

function Form(props) {

  return (
    <div className="container">
      <h3 className="title is-4 has-text-centered">{props.title}</h3>
      <form>
        {props.children}
      </form>
    </div>
  );
}

export default Form;