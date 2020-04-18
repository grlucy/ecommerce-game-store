import React from "react";

import Address from "../Address";
import Phone from "../Phone";
import Hours from "../Hours";

function ContactInfo() {
  return (
    <>
      <div className="columns">
        <div className="column has-text-centered-mobile">
          <Address />
        </div>
        <div className="column has-text-centered-mobile">
          <Phone />
        </div>
        <div className="column has-text-centered-mobile">
          <Hours />
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
