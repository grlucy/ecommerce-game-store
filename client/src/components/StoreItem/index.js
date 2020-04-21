import React from "react";
import "./style.css";

function StoreItem(props) {

  const { name, price, category, quantity, image, description} = props.product;

  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-4">
        <div className="tile is-child">
          <img className="product-img" src={image} alt={"Image of " + name}/>
        </div>
      </div>
      <div className="tile is-parent is-vertical is-8">
        <div className="tile is-child">
          <p className="title is-size-3">{name}</p>
          <p className="subtitle is-size-6"><strong>Category: </strong>{category}</p>
          <div className="level">
            <div className="level-left">
              <div className="level-item"><strong>Price: <span className="has-text-danger is-size-4">${price}</span></strong></div>
              <div className="level-item"><button className="button is-danger">Add To Cart</button></div>
            </div>
          </div>
        </div>
        <div className="tile is-child">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;