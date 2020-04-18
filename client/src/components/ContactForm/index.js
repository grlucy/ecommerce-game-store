import React from "react";
import "./contactForm.css";

function ContactForm() {
  return (
    <>
      <form
        id="contact-form"
        action="https://formspree.io/mwkndlvn"
        method="POST"
      >
        <h4 className="title is-4 has-text-black">CONTACT US</h4>
        <div className="field">
          <label className="label">Name:</label>
          <div className="control">
            <input
              className="input is-radiusless"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email:</label>
          <div className="control">
            <input
              className="input is-radiusless"
              type="email"
              name="_replyto"
              placeholder="Email"
            />
          </div>
        </div>
        <input type="hidden" name="_subject" value="Message for Dragon's Den" />
        <div className="field">
          <label className="label">Message:</label>
          <div className="control">
            <textarea
              class="textarea is-radiusless"
              name="message"
              placeholder="Message"
            />
          </div>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-danger" type="submit">
              SUBMIT
            </button>
          </p>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
