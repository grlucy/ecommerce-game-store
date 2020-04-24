import React from "react";
import { Link } from "react-router-dom";

// CSS Styles are from featuredcategory.css

function News() {
  return (
    <>
      <section className="section has-background-grey-lighter TBMarg">
        <div className="container">
          <div className="is-flex-tablet">
            <figure className="image news-img is-hidden-mobile">
              <img
                src="assets/images/stock-photos/dice.jpg"
                className="is-rounded"
                alt="Dice"
              />
            </figure>
            <div>
              <h1 className="title has-text-black has-text-centered-mobile">
                Don't roll the dice with your safety.
              </h1>
              <p className="has-text-black has-text-centered-mobile">
                Due to COVID-19, we are temporarily limiting our operations to
                online sales and curbside pickup. Please check out our new{" "}
                <Link
                  to="/store"
                  className="has-text-danger has-text-weight-bold"
                >
                  online store
                </Link>
                , which accepts credit card and PayPal payments for your
                convenience.
              </p>
              <br />
              <p className="has-text-black has-text-centered-mobile">
                Thank you for supporting our business during this difficult
                time. We love our customers and still want to hear from you! Our
                store experts are available to answer your questions about
                games, accessories, and more via email or phone. See our{" "}
                <Link
                  to="/contact"
                  className="has-text-danger has-text-weight-bold"
                >
                  contact page
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
