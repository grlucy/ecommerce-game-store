import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import adminAPI from "../../utils/adminAPI";
import { isAuthenticated } from "../../utils/auth";
import "./style.css";
import { TransactionLineItem } from "braintree";
import Form from "../../components/Form";
import InputField from "../../components/Form/InputField";
import SubmitBtn from "../../components/Form/SubmitBtn";
import OrdersTable from "../../components/OrdersTable";

function Admin() {

  const [ newProductVals, setNewProductVals ] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
    description: "",
    error: "",
    success: ""
  });

  const [ existingProductVals, setExistingProductVals ] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
    description: "",
    error: "",
    success: ""
  });

  const { user, token } = isAuthenticated();
  
  const handleNewProdChange = (name) => (event) => {
    setNewProductVals({ ...newProductVals, error: false, [name]: event.target.value });
  };

  const handleNewProdSubmit = (event) => {
    event.preventDefault();
    setNewProductVals({ ...newProductVals, error: false, success: false});
    const { name, price, category, quantity, image, description } = newProductVals;
    console.log("new product form submitted");
    adminAPI.createProduct(user._id, token, {
      name,
      price,
      category,
      quantity,
      image,
      description
    })
      .then((res) => {
        if (res.error) {
          setNewProductVals({ ...newProductVals, error: res.error, success: false });
        } else {
          setNewProductVals({
            name: "",
            price: "",
            category: "",
            quantity: "",
            image: "",
            description: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => {
        setNewProductVals({
          ...newProductVals,
          error: err.response.data.error,
          success: false,
        });
      });      
  };

  const handleExistingProdChange = (name) => (event) => {
    setExistingProductVals({ ...existingProductVals, error: false, [name]: event.target.value });
  };

  const handleExistingProdSubmit = (event) => {
    event.preventDefault();
    console.log("new product form submitted");
  };



  return (
    <>
      <div className="title page-title has-text-centered is-2">
        ADMIN DASHBOARD
      </div>
      <section className="section">
        <div className="tile is-ancestor is-vertical">
          <div className="tile is-parent">
            <div className="tile is-child">
              <div className="container form-container">
                <Form title="ADD NEW PRODUCT">
                  <InputField
                    name="name"
                    label="Name:"
                    type="text"
                    placeholder="name"
                    onChange={handleNewProdChange}
                    value={newProductVals.name}
                  />
                  <InputField
                    name="price"
                    label="Price:"
                    type="number"
                    placeholder="price"
                    onChange={handleNewProdChange}
                    value={newProductVals.price}
                  />
                  <InputField
                    name="category"
                    label="Category:"
                    type="text"
                    placeholder="category"
                    onChange={handleNewProdChange}
                    value={newProductVals.category}
                  />
                  <InputField
                    name="quantity"
                    label="Quantity"
                    type="number"
                    placeholder="quantity"
                    onChange={handleNewProdChange}
                    value={newProductVals.quantity}
                  />
                  <InputField
                    name="image"
                    label="Image:"
                    type="url"
                    placeholder="url"
                    onChange={handleNewProdChange}
                    value={newProductVals.image}
                  />
                  <InputField
                    name="description"
                    label="Description:"
                    type="text"
                    placeholder="description"
                    onChange={handleNewProdChange}
                    value={newProductVals.description}
                  />
                  <SubmitBtn onSubmit={handleNewProdSubmit} />
                </Form>
              </div>
            </div>
            <div className="tile is-child">
              <div className="container form-container">
                <Form title="UPDATE EXISTING PRODUCT">
                  <InputField
                      name="name"
                      label="Name:"
                      type="text"
                      placeholder="name"
                      onChange={handleExistingProdChange}
                      value={existingProductVals.name}
                  />
                  <InputField
                    name="price"
                    label="Price:"
                    type="number"
                    placeholder="price"
                    onChange={handleExistingProdChange}
                    value={existingProductVals.price}
                  />
                  <InputField
                    name="category"
                    label="Category:"
                    type="text"
                    placeholder="category"
                    onChange={handleExistingProdChange}
                    value={existingProductVals.category}
                  />
                  <InputField
                    name="quantity"
                    label="Quantity"
                    type="number"
                    placeholder="quantity"
                    onChange={handleExistingProdChange}
                    value={existingProductVals.quantity}
                  />
                  <InputField
                    name="image"
                    label="Image:"
                    type="url"
                    placeholder="url"
                    onChange={handleExistingProdChange}
                    value={existingProductVals.image}
                  />
                  <InputField
                    name="description"
                    label="Description:"
                    type="text"
                    placeholder="description"
                    onChange={handleExistingProdChange}
                    value={existingProductVals.description}
                  />
                  <SubmitBtn onSubmit={handleExistingProdSubmit} />
                </Form>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <OrdersTable />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;