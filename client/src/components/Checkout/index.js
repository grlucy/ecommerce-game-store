import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../utils/auth";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import DropIn from "braintree-web-drop-in-react";

function Checkout({ products, emptyCart }) {

  const [ data, setData ] = useState({
    loading: false,
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
        <button className="button is-danger is-fullwidth">SIGN IN TO CHECKOUT</button>
      </Link>
    );
  }

  const buy = () => {
    setData({ ...data, loading: true });
    // send the nonce to your server
    // data.instance.requestPaymentMethod returns nonce
    let nonce;
    let getNonce = data.instance.requestPaymentMethod()
    .then((res) => {
      // console.log(res);
      nonce = res.nonce;
      // once you have nonce (card type, card number) send nonce as "paymentMethodNonce"
      // and total to charge
      // console.log("send nonce and total to process: ", nonce, getTotal().toFixed(2));
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: getTotal()
      }
      API.processPayment(userId, token, paymentData)
      .then((res) => {
        const orderData = {
          products: products,
          transaction_id: res.data.transaction.id,
          amount: res.data.transaction.amount
        };
        API.createOrder(userId, token, orderData)
        .then((res) => {
          setData({ ...data, success: true, loading: false});
          emptyCart();
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
        setData({ ...data, loading: false });
      });
    })
    .catch((err) => {
      // console.log("dropin error: " , err);
      setData({ ...data, error: err.message });
    })
  }

  const showDropIn = () => {
    return (
      <div onBlur={() => setData({ ...data, error: "" })}>
        {data.clientToken !== null ? (
          <div>
            <DropIn
              options={{
                authorization: data.clientToken,
                paypal: {
                  flow: "vault"
                }
              }}
              onInstance={instance => (data.instance = instance)}
            />
            <h2 className="title is-3">Total: <span className="has-text-danger">${getTotal().toFixed(2)}</span></h2>
            { products.length > 0 ? (
                <button className="button is-success is-fullwidth" onClick={buy}>MAKE PAYMENT</button>
              ) : (
                <button className="button is-success is-fullwidth" disabled>MAKE PAYMENT</button>
              )

            }
          </div>
        ) : (
          <h2 className="title is-3">Total: <span className="has-text-danger">${getTotal().toFixed(2)}</span></h2>
        )}
      </div>
    );
  }

  const showError = (error) => {
    return (
      <div className="notification is-danger is-light" style={{display: error ? "" : "none"}}>
        {error}
      </div>
    );
  }

  const showSuccess = (success) => {
    return (
      <div className="notification is-success is-light" style={{display: success ? "" : "none"}}>
        Payment received. Thank you!
      </div>
    );
  }

  const showLoading = (loading) => loading && <h2 className="title is-3">Loading...</h2>


  return (
    <div>
      {showLoading(data.loading)}
      {showSuccess(data.success)}
      {showError(data.error)}
      {showCheckout()}
    </div>
  );
}

export default Checkout;