import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import ContactSection from "../../components/ContactSection";
import Map from "../../components/Map";

function Contact() {
  return (
    <>
      <section className="section">
        <div className="container">
          <ContactSection />
          <Map />
        </div>
      </section>
    </>
  );
}

export default Contact;
