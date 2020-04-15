import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SignUpForm from "../../components/SignUpForm";

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
  };

  return (
    <>
      <SignUpForm onChange={handleInputChange} onSubmit={handleFormSubmit}/>
      <div>
        {/* {JSON.stringify(values)} */}
      </div>
    </>
  );
}

export default SignUp;