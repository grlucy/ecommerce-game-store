import React from "react";
import "./style.css";

function OrdersTable(props) {
  return (
    <>
      <h3 className="title is-4 has-text-centered">{props.title}</h3>
      <table className="table is-striped is-narrow is-fullwidth orders-table">
        <thead>
          <tr>
            <th>Order #</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Product(s)</th>
            <th>Scheduled Pickup Date/Time</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {props.orders.map((order) => (
            <tr key={order._id}>
              <td>{order.transaction_id}</td>
              <td>{order.user.name}</td>
              <td>{order.user.email}</td>
              <td>
                {order.products.map((product) => (
                  <p key={product.name}>
                    {product.name} ({product.count})
                  </p>
                ))}
              </td>
              <td>{order.pickup}</td>
              <td>
                <button
                  className="button is-danger is-small"
                  onClick={() => props.onClick(order._id, "Filled")}
                >
                  Filled
                </button>
              </td>
            </tr>
          ))}
          {props.orders.length < 1 ? (
            <tr>
              <td colSpan="6">
                <em>There are currently no unfilled orders</em>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </>
  );
}

export default OrdersTable;
