import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Page from "../../components/Page";
import SignUpForm from "../../components/SignUpForm";

function SignUp() {

  return (
    <>
      <Page>
        <SignUpForm />
      </Page>
    </>
  );
}

export default SignUp;