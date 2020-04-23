import React from "react";
import "./style.css";

function CartItem(props) {

  const { item, onCountChange, removeFromCart } = props;
  const { _id, name, price, image, count } = item;

  return (
    <>
      <div className="container">
        <div className="tile is-ancestor cart-item">
          <div className="tile is-parent is-3">
            <div className="tile is-child">
              <img className="cart-img" src={image} alt={"Image of " + name}/>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-9">
            <div className="tile is-child">
              <p className="title is-size-3">{name}</p>
              <div className="level">
                <div className="level-left">
                  <div className="level-item"><strong>Price: <span className="has-text-danger is-size-4">${price.toFixed(2)}</span></strong></div>
                  <div className="level-item">
                    <div className="field has-addons">
                      <div className="control">
                        <button className="button is-small is-static">
                          Qty:
                        </button>
                      </div>
                      <div className="control">
                        {count > 0 ?
                          <input
                            className="input is-radiusless is-small quantity-field"
                            type="number"
                            onChange={onCountChange(_id)}
                            value={count}
                          />
                          :
                          <input
                            className="input is-radiusless is-small quantity-field"
                            type="number"
                            onChange={onCountChange(_id)}
                            value={count}
                            disabled
                          />
                        }
                      </div>
                      <div className="control">
                        <button className="button is-danger is-small" onClick={removeFromCart(_id)}>
                          <span className="icon">
                            <i className="fas fa-trash-alt"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <strong>Item Subtotal: <span className="has-text-danger is-size-4">${(price * count).toFixed(2)}</span></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;