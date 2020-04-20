import React from "react";
import "./style.css";

function OrdersTable(props) {

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* render data rows here */}
        </tbody>
      </table>
    </>
  );
}

export default OrdersTable;