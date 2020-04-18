import React from "react";
import { Link } from "react-router-dom";
import "./featuredcategory.css";

function FeaturedCategory(props) {
  return (
    <>
      <div className="TBMarg LHeight featured-container">
        <img className="align-bot featured-img" src={props.image} />
        <div className="featured-overlay level is-mobile">
          <div className="level-item has-text-centered">
            <div className="line-space">
              <br />
              <h1 className="title has-text-white featured-header">
                CLASSIC BOARD GAMES
              </h1>
              <p className="has-text-white">
                Now available in our online store
              </p>
              <p>
                <Link
                  to="/store"
                  className="has-text-danger has-text-weight-bold"
                >
                  Shop Board Games ➤
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCategory;
