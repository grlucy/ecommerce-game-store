import React from "react";

// CSS Styles are from featuredcategory.css

function SecondaryCategory(props) {
  return (
    <>
      <div className={props.classes}>
        <img className="align-bot secondary-img" src={props.image} />
      </div>
    </>
  );
}

export default SecondaryCategory;
