import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import { addItem } from "../../utils/cartHelpers";

function StoreItem(props) {

  const { name, price, category, quantity, image, description} = props.product;

  const [purchaseQty, setPurchaseQty] = useState(quantity > 0 ? 1 : 0);
  const [redirect, setRedirect] = useState(false);

  const handleQtyChange = (event) => {
    if (event.target.value >= 0) {
      setPurchaseQty(event.target.value);
    }
    else {
      setPurchaseQty(0);
    }
  }

  const cartButton = () => {
    if (quantity <= 0) {
      return <div className="level-item"><button className="button is-danger is-outlined is-static">Out Of Stock</button></div>
    }
    else if (purchaseQty <= 0) {
      return <div className="level-item"><button className="button is-danger is-outlined is-static">Add To Cart</button></div>
    }
    else {
      return <div className="level-item"><button className="button is-danger" onClick={handleAddToCart}>Add To Cart</button></div>
    }
  }

  const handleAddToCart = (event) => {
    addItem(props.product, purchaseQty, () => {
      setRedirect(true);
    })
  }

  return (
    <>
      {redirect ? <Redirect to="/cart" /> : <></>}
      <div className="container">
        <div className="tile is-ancestor store-item">
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
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <div className="field is-horizontal">
                      <div className="field-label is-small quantity-label">
                        <label className="label">Qty:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            {quantity > 0 ?
                              <input 
                                className="input is-radiusless is-small quantity-field"
                                type="number"
                                onChange={handleQtyChange}
                                value={purchaseQty}
                              />
                              :
                              <input 
                                className="input is-radiusless is-small quantity-field"
                                type="number"
                                onChange={handleQtyChange}
                                value={purchaseQty}
                                disabled
                              />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {cartButton()}
                </div>
              </div>
            </div>
            <div className="tile is-child">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreItem;