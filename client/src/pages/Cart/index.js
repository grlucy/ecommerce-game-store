import React, { useState, useEffect } from "react";
import { getCart } from "../../utils/cartHelpers";
import CartItem from "../../components/CartItem";

function Cart() {

  const [ items, setItems ] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const handleCountChange = () => {
    console.log("handling that count change");
  }

  const removeItemFromCart = (item) => {
    console.log("removing that there item");
  }

  const renderEmpty = () => {
    return <div>Hey howdy hey!</div>;
  }

  const renderItems = () => {
    return items.map((item) => {
      return (
        <CartItem
          item={item}
          onCountChange={handleCountChange}
          removeFromCart={removeItemFromCart}
          key={item._id}
        />
      );
    });
  }

  return (
    <>
      <div className="title page-title has-text-centered is-2">
        CART
      </div>
      <section className="section">
        <div className="columns">
          <div className="column is-three-fifths">
            { items.length === 0 ? renderEmpty() : renderItems() }
          </div>
          <div className="column is-two-fifths">
            {/* render braintree checkout stuff here */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;