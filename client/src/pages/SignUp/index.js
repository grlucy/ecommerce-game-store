import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import AuthForm from "../../components/AuthForm";
import InputField from "../../components/AuthForm/InputField";
import SubmitBtn from "../../components/AuthForm/SubmitBtn";
import HelpText from "../../components/AuthForm/HelpText";

function SignUp() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const handleInputChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    API.signUp({
      name: values.name,
      email: values.email,
      password: values.password
    })
    .then( data => {
      if(data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          name: "",
          email: "",
          password: "",
          error: "",
          success: true
        });
      }
    })
    .catch( err => {
      setValues({ ...values, error: err.message, success: false });
    });
  };

  return (
    <>
      <AuthForm title="Sign Up">
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
          name="name"
          label="Name:"
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
          value={values.name}
          icon="fas fa-user"
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
        <SubmitBtn 
          onSubmit={handleFormSubmit}
        />
        <HelpText error={values.error} success={values.success} />
      </AuthForm>
    </>
  );
}

export default SignUp;