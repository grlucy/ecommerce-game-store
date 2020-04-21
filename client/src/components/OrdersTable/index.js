import React from "react";
import "./style.css";

function OrdersTable(props) {
  console.log(props.orders);

  return (
    <>
      <h3 className="title is-4 has-text-centered">{props.title}</h3>
      <table className="table is-striped is-narrow orders-table">
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
              <td>{order._id}</td>
              <td>{order.user.name}</td>
              <td>{order.user.email}</td>
              <td>
                {order.products.map((product) => (
                  <p>
                    {product.name} ({product.count})
                  </p>
                ))}
              </td>
              <td>{order.pickup}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default OrdersTable;
