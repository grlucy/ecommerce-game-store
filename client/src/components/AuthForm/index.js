import React from "react";
import "./style.css";

function AuthForm(props) {

  return (
    <section className="container auth-form">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title is-1 has-text-centered">{props.title}</h1>
          <form>
            {props.children}
          </form>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;