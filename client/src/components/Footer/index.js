import React from "react";
import FooterLogo from "./FooterLogo";
import SocialLinks from "./SocialLinks";
import "./style.css";

function Footer() {

  return (
    <footer className="level">
      <FooterLogo />
      <SocialLinks />
    </footer>
  );
}

export default Footer;