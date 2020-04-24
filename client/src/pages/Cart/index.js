import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCart, updateCart } from "../../utils/cartHelpers";
import CartItem from "../../components/CartItem";
import Checkout from "../../components/Checkout";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const handleCountChange = (id) => (event) => {
    if (event.target.value >= 1) {
      const updatedItems = items.map((item) => {
        if (item._id === id) {
          item.count = event.target.value;
        }
        return item;
      });
      setItems(updatedItems);
      updateCart(updatedItems);
    }
  };

  const removeItemFromCart = (id) => (event) => {
    const updatedItems = items.filter((item) => {
      return item._id !== id;
    });
    setItems(updatedItems);
    updateCart(updatedItems);
  };

  const emptyCart = () => {
    setItems([]);
    updateCart([]);
  };

  const renderEmpty = () => {
    return (
      <section className="section">
        <h2 className="title is-3">Your Cart is Empty!</h2>
        <Link to="/store">
          <button className="button is-danger is-medium">
            Continue Shopping
          </button>
        </Link>
      </section>
    );
  };

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
  };

  return (
    <div className="container">
      <div className="title page-title has-text-centered is-2">CART</div>
      <section className="section">
        <div className="columns">
          <div className="column is-three-fifths">
            {items.length === 0 ? renderEmpty() : renderItems()}
          </div>
          <div className="column is-two-fifths">
            <Checkout products={items} emptyCart={emptyCart} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
