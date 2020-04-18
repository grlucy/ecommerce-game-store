import React from "react";

import FeatureImage from "../FeatureImage";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";

function ContactSection() {
  return (
    <>
      <div className="columns is-variable is-6">
        <div className="column is-one-third is-hidden-mobile">
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
