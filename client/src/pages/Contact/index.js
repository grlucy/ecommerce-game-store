import React from "react";
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
