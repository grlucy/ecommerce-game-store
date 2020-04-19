import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
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
          setValues({
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
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
        <SubmitBtn onSubmit={handleFormSubmit} />
        <HelpText toggle={values.error} color="is-danger">
          {values.error}
        </HelpText>
        <HelpText toggle={values.success} color="is-success">
          New account created. Please <Link to="/signin">Sign In</Link>.
        </HelpText>
        <hr />
        <LinkBtn route="/signin">USE EXISTING ACCOUNT</LinkBtn>
      </AuthForm>
    </>
  );
}

export default SignUp;
