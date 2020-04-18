import React from "react";
import { Link } from "react-router-dom";

// CSS Styles are from featuredcategory.css

function SecondaryCategory(props) {
  return (
    <>
      <div className={props.classes}>
        <img className="align-bot secondary-img" src={props.image} />
        <div className="secondary-overlay level is-mobile">
          <div className="level-item has-text-centered">
            <div className="line-space">
              <h1 className="title has-text-white secondary-header">
                {props.headerText}
              </h1>
              <p>
                <Link
                  to="/store"
                  className="has-text-danger has-text-weight-bold"
                >
                  {props.linkText}
                </Link>
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondaryCategory;
