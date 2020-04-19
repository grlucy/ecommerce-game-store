import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { isAuthenticated } from "../../utils/auth";
import "./style.css";

function Account() {

  const { user : { name, email }} = isAuthenticated();

  return (
    <section className="section">
      <div className="container">
        <div className="card account-card">
          <header className="card-header">
            <h3 className="card-header-title">User Information</h3>
          </header>
          <div className="card-content">
            <ul>
              <li>
                <span className="icon">
                  <i className="fas fa-user"></i>
                </span>
                {name}
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-envelope"></i>
                </span>
                {email}
              </li>
            </ul>
          </div>
        </div>
        <div className="card account-card">
          <header className="card-header">
            <h3 className="card-header-title">Order History</h3>
          </header>
          <div className="card-content">
            <ul>
              <li>history</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;