import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../utils/auth";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import TimePicker from "rc-time-picker";
import moment from "moment";
import API from "../../utils/API";
import { disabledHours, firstAvailableDay, firstAvailableTime } from "../../utils/pickupHelpers";
import DropIn from "braintree-web-drop-in-react";
import AuthInputField from "../../components/AuthForm/AuthInputField";
import 'rc-time-picker/assets/index.css';
import "./style.css";

function Checkout({ products, emptyCart }) {

  const [data, setData] = useState({
    loading: false,
    success: false,
    currentDate: new Date(),
    pickupDate: firstAvailableDay(),
    pickupTime: firstAvailableTime(firstAvailableDay()),
    clientToken: null,
    error: "",
    instance: {},
  });

  // const [pickupDate, setPickupDate] = useState(new Date());

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  // const handlePickupChange = (name) => (event) => {
  //   setData({ ...data, pickup: event.target.value });
  // };

  const handleDateChange = (date) => {
    console.log("in the date change handler");
    console.log(date);
    setData({ ...data, pickupDate: date, pickupTime: firstAvailableTime(date) });
  }

  const handleTimeChange = (time) => {
    setData({ ...data, pickupTime: time});
  }

  const getToken = (userId, token) => {
    API.getBraintreeClientToken(userId, token).then((res) => {
      if (res.error) {
        setData({ ...data, error: res.error });
      } else {
        console.log("Here comes the data... " + { ...data, clientToken: res.data.clientToken });
        setData({ ...data, clientToken: res.data.clientToken });
      }
    });
  };

  useEffect(() => {
    getToken(userId, token);
    // eslint-disable-next-line
  }, []);

  const getTotal = () => {
    return products.reduce((currentVal, nextVal) => {
      return currentVal + nextVal.count * nextVal.price;
    }, 0);
  };

  const getDisabledHours = () => {
    return disabledHours(data.pickupDate);
  }

  const getMaxDate = () => {
    let date = new Date();
    date.setDate((date.getDate() + 5));
    return date;
  }

  const showCheckout = () => {
    return isAuthenticated() ? (
      <div>{showDropIn()}</div>
    ) : (
      <Link to="/signin">
        <button className="button is-danger is-fullwidth">
          SIGN IN TO CHECKOUT
        </button>
      </Link>
    );
  };

  const buy = () => {
    setData({ ...data, loading: true });
    // send the nonce to your server
    // data.instance.requestPaymentMethod returns nonce
    let nonce;
    // eslint-disable-next-line
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((res) => {
        nonce = res.nonce;
        // once you have nonce (card type, card number) send nonce as "paymentMethodNonce"
        // and total to charge
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal().toFixed(2),
        };
        API.processPayment(userId, token, paymentData)
          .then((res) => {
            console.log(res);
            const orderData = {
              products: products,
              pickup: data.pickup,
              transaction_id: res.data.transaction.id,
              amount: res.data.transaction.amount,
            };
            API.createOrder(userId, token, orderData)
              .then((res) => {
                setData({ ...data, success: true, loading: false });
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
        setData({ ...data, error: err.message });
      });
  };

  const showDropIn = () => {
    return (
      <div onBlur={() => setData({ ...data, error: "" })}>
        {data.clientToken !== null ? (
          <div>
            <DropIn
              options={{
                authorization: data.clientToken,
                paypal: {
                  flow: "vault",
                },
              }}
              onInstance={(instance) => (data.instance = instance)}
            />
            {/* <div id="pickup-form">
              <form>
                <AuthInputField
                  name="pickup"
                  label="Enter Desired Pickup Time"
                  type="text"
                  placeholder="ex. 4/25 @ 12:00pm"
                  onChange={handlePickupChange}
                  value={data.pickup}
                  icon="fas fa-car"
                />
              </form>
            </div> */}
            <DatePicker
              onChange={handleDateChange}
              value={data.pickupDate}
              calendarIcon={<span style={{fontSize: 20}}><i className="far fa-calendar"></i></span>}
              clearIcon={null}
              minDate={firstAvailableDay()}
              maxDate={getMaxDate()}
              minDetail="month"
              required={true}
            />
            <TimePicker
              className="time-picker"
              onChange={handleTimeChange}
              value={data.pickupTime}
              showSecond={false}
              minuteStep={30}
              disabledHours={getDisabledHours}
              hideDisabledOptions={true}
              use12Hours={true}
              allowEmpty={false}
            />
            {/* <TimePicker
              onChange={handleTimeChange}
              value={data.pickupTime}
              maxDetail="hour"
              minTime="08:00:00"
              maxTime="18:00:00"
            /> */}
            <h2 className="title is-3">
              Total:{" "}
              <span className="has-text-danger">${getTotal().toFixed(2)}</span>
            </h2>
            {products.length > 0 && data.pickup ? (
              <button className="button is-success is-fullwidth" onClick={buy}>
                MAKE PAYMENT
              </button>
            ) : (
              <button className="button is-success is-fullwidth" disabled>
                MAKE PAYMENT
              </button>
            )}
          </div>
        ) : (
          <h2 className="title is-3">
            Total:{" "}
            <span className="has-text-danger">${getTotal().toFixed(2)}</span>
          </h2>
        )}
      </div>
    );
  };

  const showError = (error) => {
    return (
      <div
        className="notification is-danger is-light"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const showSuccess = (success) => {
    return (
      <div
        className="notification is-success is-light"
        style={{ display: success ? "" : "none" }}
      >
        Payment received. Thank you!
      </div>
    );
  };

  const showLoading = (loading) =>
    loading && <h2 className="title is-3">Loading...</h2>;

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
