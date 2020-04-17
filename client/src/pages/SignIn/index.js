import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { authenticate } from "../../utils/auth";
import AuthForm from "../../components/AuthForm";
import InputField from "../../components/AuthForm/InputField";
import SubmitBtn from "../../components/AuthForm/SubmitBtn";
import HelpText from "../../components/AuthForm/HelpText";
import LinkBtn from "../../components/LinkBtn";

function SignIn() {
  const [values, setValues] = useState({
    email: "bjf216@gmail.com",
    password: "hotdog1",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const handleInputChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    API.signIn({
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      if (res.error) {
        setValues({ ...values, error: res.error, loading: false });
      } else {
        authenticate(res.data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });  
        });
      }
    })
    .catch((err) => {
      setValues({
        ...values,
        error: err.response.data.error,
        success: false
      });
    });
  };

  const redirectUser = () => {
    if (values.redirectToReferrer) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      <AuthForm title="SIGN IN">
        <InputField
          name="email"
          label="Email Address:"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={values.email}
          icon="fas fa-envelope"
        />
        <InputField
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
        <HelpText toggle={values.loading} color="is-info">
          Loading...
        </HelpText>
        <hr />
        <LinkBtn route="/signup">CREATE AN ACCOUNT</LinkBtn>
      </AuthForm>
      {redirectUser()}
    </>
  );
}

export default SignIn;
