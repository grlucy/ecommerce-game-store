import React from "react";
import "./map.css";

function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d101192.81807431663!2d-77.55433749063513!3d37.57212831927532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x89b114a2275279b5%3A0x3109318ed566ddff!2sUniversity%20of%20Richmond%2C%20410%20Westhampton%20Way%2C%20Richmond%2C%20VA%2023173!3m2!1d37.5751669!2d-77.5407146!5e0!3m2!1sen!2sus!4v1587225745333!5m2!1sen!2sus"
        className="google-map"
        height="460"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </>
  );
}

export default Map;
