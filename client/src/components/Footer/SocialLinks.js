import React from "react";

function SocialLinks() {
  return (
    <div className="level-right">
      <p className="level-item">
        <a
          href="https://www.facebook.com/"
          className="level is-mobile social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon has-text-white">
            <i className="fab fa-facebook"></i>
          </span>
        </a>
      </p>
      <p className="level-item">
        <a
          href="https://twitter.com/intent/tweet?text=Dragon's Den now has an online store!&amp;hashtags=gamestore"
          className="level is-mobile social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon has-text-white">
            <i className="fab fa-twitter"></i>
          </span>
        </a>
      </p>
      <p className="level-item">
        <a
          href="https://www.instagram.com"
          className="level is-mobile social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon has-text-white">
            <i className="fab fa-instagram"></i>
          </span>
        </a>
      </p>
    </div>
  );
}

export default SocialLinks;
