import React from "react";

import Address from "../Address";
import Phone from "../Phone";
import Hours from "../Hours";

function ContactInfo() {
  return (
    <>
      <div className="columns">
        <div className="column">
          <Address />
        </div>
        <div className="column">
          <Phone />
        </div>
        <div className="column">
          <Hours />
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
