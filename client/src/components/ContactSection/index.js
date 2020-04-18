import React from "react";

import FeatureImage from "../FeatureImage";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";

function ContactSection() {
  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <FeatureImage />
        </div>
        <div className="column">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactSection;
