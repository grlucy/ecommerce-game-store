import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { authenticate, isAuthenticated } from "../../utils/auth";

import AuthForm from "../../components/AuthForm";
import AuthInputField from "../../components/AuthForm/AuthInputField";
import SubmitBtn from "../../components/Form/SubmitBtn";
import HelpText from "../../components/Form/HelpText";
import LinkBtn from "../../components/LinkBtn";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    redirectToSignIn: false,
  });

  const handleInputChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    API.signUp({
      name: values.name,
      email: values.email,
      password: values.password,
    })
      .then((res) => {
        if (res.error) {
          setValues({ ...values, error: res.error, success: false });
        } else {
          API.signIn({
            email: values.email,
            password: values.password,
          })
            .then((res) => {
              if (res.error) {
                setValues({ ...values, error: res.error });
              } else {
                authenticate(res.data, () => {
                  setValues({
                    ...values,
                    redirectToSignIn: true,
                  });
                });
              }
            })
            .catch((err) => {
              setValues({
                ...values,
                error: err.response.data.error,
                success: false,
              });
            });
        }
      })
      .catch((err) => {
        if (
          err.response.data.err ===
          "11000 duplicate key error collection: dragonsden.users index: email already exists; must be unique"
        ) {
          setValues({
            ...values,
            error: "This email address already has an account",
            success: false,
          });
        } else {
          setValues({
            ...values,
            error: err.response.data.error,
            success: false,
          });
        }
      });
  };

  const { user } = isAuthenticated();

  const redirectUser = () => {
    if (values.redirectToSignIn) {
      //redirect user appropriately after login
      if (user && user.role === "Admin") {
        return <Redirect to="/admin" />;
      } else {
        return <Redirect to="/account" />;
      }
    }
  };

  return (
    <>
      <AuthForm title="SIGN UP">
        <AuthInputField
          name="email"
          label="Email Address:"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={values.email}
          icon="fas fa-envelope"
        />
        <AuthInputField
          name="name"
          label="Name:"
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
          value={values.name}
          icon="fas fa-user"
        />
        <AuthInputField
          name="password"
          label="Password:"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={values.password}
          icon="fas fa-lock"
        />
        <SubmitBtn onSubmit={handleFormSubmit}>SUBMIT</SubmitBtn>
        <HelpText toggle={values.error} textSize="5" color="is-danger">
          {values.error}
        </HelpText>
        <hr />
        <LinkBtn route="/signin">USE EXISTING ACCOUNT</LinkBtn>
      </AuthForm>
      {redirectUser()}
    </>
  );
}

export default SignUp;
