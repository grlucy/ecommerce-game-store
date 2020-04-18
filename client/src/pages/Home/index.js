import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import FeaturedCategory from "../../components/FeaturedCategory";
import SecondaryCategory from "../../components/SecondaryCategory";
import News from "../../components/News";

function Home() {
  return (
    <>
      <FeaturedCategory image="assets/images/stock-photos/chess1.jpg" />
      <div className="is-flex-tablet">
        <SecondaryCategory
          image="assets/images/stock-photos/puzzle.jpg"
          classes="LHeight secondary-box-left"
          headerText="PUZZLES FOR ALL AGES"
          linkText="Shop Puzzles ➤"
        />
        <SecondaryCategory
          image="assets/images/stock-photos/cards.jpg"
          classes="LHeight secondary-box-right"
          headerText="BUILD YOUR DECK"
          linkText="Shop Cards ➤"
        />
      </div>
      <News />
    </>
  );
}

export default Home;
