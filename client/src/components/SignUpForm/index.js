import React from "react";
import "./style.css";

function SignUpForm() {

  return (
    <section className="container" id="sign-up-form">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title is-1 has-text-centered">Sign Up</h1>
          <form>
            <div className="field">
              <label className="label">Email Address:</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Email"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <p className="help"></p>
            </div>
            <div className="field">
              <label className="label">Name:</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Name"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <p className="help"></p>
            </div>
            <div className="field">
              <label className="label">Password:</label>
              <div className="control has-icons-left">
                <input className="input" type="password" placeholder="Password"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <p className="help"></p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-danger">
                  Submit
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;