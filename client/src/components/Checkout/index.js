import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../utils/auth";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import DropIn from "braintree-web-drop-in-react";

function Checkout({ products }) {

  const [ data, setData ] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: {}
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    API.getBraintreeClientToken(userId, token)
    .then((res) => {
      if (res.error) {
        setData({ ...data, error: res.error });
      } else {
        setData({ ...data, clientToken: res.data.clientToken });
      }

    })
  }

  useEffect(() => {
    getToken(userId, token);
  }, []);


  const getTotal = () => {
    return products.reduce((currentVal, nextVal) => {
      return currentVal + nextVal.count * nextVal.price;
    }, 0);
  }

  const showCheckout = () => {
    return isAuthenticated() ? (
    <div>{showDropIn()}</div>
    ) : (
      <Link to="/signin">
        <button className="button is-danger">SIGN IN TO CHECKOUT</button>
      </Link>
    );
  }

  const showDropIn = () => {
    return (
      <div>
        {data.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: data.clientToken }}
              onInstance={instance => (data.instance = instance)}
            />
            <button className="button is-success">CHECKOUT</button>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <h2>Total: {getTotal().toFixed(2)}</h2>
      {showCheckout()}
    </div>
  );
}

export default Checkout;