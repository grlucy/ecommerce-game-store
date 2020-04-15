import React from "react";
import { Link } from "react-router-dom";

function SocialLinks() {

  return (
    <div className="level-item">
      <div className="field is-grouped">
        <p className="control">
          <Link to="https://www.facebook.com/" className="bd-tw-button button is-danger" data-social-network="Facebook">
            <span className="icon">
              <i className="fab fa-facebook"></i>
            </span>
          </Link>
        </p>
        <p className="control">
          <Link to="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms" className="bd-tw-button button is-danger" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank">
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
          </Link>
        </p>
        <p className="control">
          <Link to="https://www.instagram.com/" className="bd-tw-button button is-danger" data-social-network="Instagram">
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SocialLinks;