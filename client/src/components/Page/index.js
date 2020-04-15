import React from "react";
import ContentWrapper from "../ContentWrapper";
import Header from "../Header";
import Footer from "../Footer";

function Page(props) {

  return (
    <>
      <ContentWrapper>
        <Header />
        {props.children}
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default Page;