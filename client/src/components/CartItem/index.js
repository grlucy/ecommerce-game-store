import React from "react";
import "./style.css";

function CartItem(props) {
  const { item, onCountChange, removeFromCart } = props;
  const { _id, name, price, image, count, quantity } = item;

  return (
    <div className="container cart-item">
      <p className="title is-size-3 is-size-4-mobile is-hidden-desktop">
        {name}
      </p>
      <div className="columns is-mobile">
        <div className="column is-half-mobile is-two-fifths-desktop is-one-third-fullhd">
          <img className="cart-img" src={image} alt={"Image of " + name} />
        </div>
        <div className="column">
          <p className="title is-size-3 is-hidden-touch">{name}</p>
          <div className="columns is-desktop">
            <div className="column price-column">
              <strong>
                Price:{" "}
                <span className="has-text-danger is-size-4 is-size-5-mobile">
                  ${price.toFixed(2)}
                </span>
              </strong>
            </div>
            <div className="column price-column">
              <div className="field has-addons quantity-controller">
                <div className="control">
                  <button className="button is-small is-static">Qty:</button>
                </div>
                <div className="control">
                  {count > 0 ? (
                    <input
                      className="input is-radiusless is-small quantity-field"
                      type="number"
                      onChange={onCountChange(_id)}
                      value={count}
                      max={quantity}
                    />
                  ) : (
                    <input
                      className="input is-radiusless is-small quantity-field"
                      type="number"
                      onChange={onCountChange(_id)}
                      value={count}
                      disabled
                    />
                  )}
                </div>
                <div className="control">
                  <button
                    className="button is-danger is-small"
                    onClick={removeFromCart(_id)}
                  >
                    <span className="icon">
                      <i className="fas fa-trash-alt"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="column price-column">
              <strong>
                Subtotal:{" "}
                <span className="has-text-danger is-size-4 is-size-5-mobile">
                  ${(price * count).toFixed(2)}
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
