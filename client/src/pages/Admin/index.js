import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import adminAPI from "../../utils/adminAPI";
import { isAuthenticated } from "../../utils/auth";
import "./style.css";
import { TransactionLineItem } from "braintree";
import Form from "../../components/Form";
import InputField from "../../components/Form/InputField";
import Dropdown from "../../components/Form/Dropdown";
import SubmitBtn from "../../components/Form/SubmitBtn";
import HelpText from "../../components/Form/HelpText";
import CheckBox from "../../components/Form/CheckBox";
import OrdersTable from "../../components/OrdersTable";

function Admin() {
  const [products, setProducts] = useState([]);

  const [orders, setOrders] = useState([]);

  const [newProductVals, setNewProductVals] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
    description: "",
    error: "",
    success: "",
  });

  const [existingProductVals, setExistingProductVals] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
    description: "",
    deleteChecked: false,
    error: "",
    success: "",
  });

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    adminAPI.getProducts().then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setProducts(res.data);
      }
    });
  };

  const loadOpenOrders = () => {
    adminAPI.listOrders(user._id, token).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setOrders(res.data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
    loadOpenOrders();
  }, []);

  const handleNewProdChange = (name) => (event) => {
    setNewProductVals({
      ...newProductVals,
      error: false,
      [name]: event.target.value,
    });
  };

  const handleNewProdSubmit = (event) => {
    event.preventDefault();
    setNewProductVals({ ...newProductVals, error: false, success: false });
    const {
      name,
      price,
      category,
      quantity,
      image,
      description,
    } = newProductVals;
    adminAPI
      .createProduct(user._id, token, {
        name,
        price,
        category,
        quantity,
        image,
        description,
      })
      .then((res) => {
        if (res.error) {
          setNewProductVals({
            ...newProductVals,
            error: res.error,
            success: false,
          });
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
          setTimeout(() => {
            setNewProductVals({
              name: "",
              price: "",
              category: "",
              quantity: "",
              image: "",
              description: "",
              error: "",
              success: false,
            });
          }, 1500);
          loadProducts();
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
    if (name !== "name") {
      setExistingProductVals({
        ...existingProductVals,
        error: false,
        [name]: event.target.value,
      });
    } else if (event.target.value === "--Select a Product--") {
      setExistingProductVals({
        ...existingProductVals,
        name: "",
        price: "",
        category: "",
        quantity: "",
        image: "",
        description: "",
        error: false,
      });
    } else {
      products.forEach((product) => {
        if (product.name === event.target.value) {
          setExistingProductVals({
            ...existingProductVals,
            name: product.name,
            price: product.price,
            category: product.category,
            quantity: product.quantity,
            image: product.image,
            description: product.description,
            error: false,
          });
        }
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setExistingProductVals({
      ...existingProductVals,
      error: false,
      [name]: !existingProductVals[name],
    });
  };

  const deleteExisting = (productId) => {
    adminAPI
      .deleteProduct(user._id, token, productId)
      .then((res) => {
        if (res.error) {
          setExistingProductVals({
            ...existingProductVals,
            error: res.error,
            success: false,
          });
        } else {
          setExistingProductVals({
            name: "",
            price: "",
            category: "",
            quantity: "",
            image: "",
            description: "",
            deleteChecked: existingProductVals.deleteChecked,
            error: "",
            success: "Product Deleted!",
          });
          setTimeout(() => {
            setExistingProductVals({
              name: "",
              price: "",
              category: "",
              quantity: "",
              image: "",
              description: "",
              deleteChecked: existingProductVals.deleteChecked,
              error: "",
              success: false,
            });
          }, 1500);
          loadProducts();
        }
      })
      .catch((err) => {
        setExistingProductVals({
          ...existingProductVals,
          error: err.response.data.error,
          success: false,
        });
      });
  };

  const updateExisting = (productId) => {
    const {
      name,
      price,
      category,
      quantity,
      image,
      description,
    } = existingProductVals;
    adminAPI
      .updateProduct(user._id, token, productId, {
        name,
        price,
        category,
        quantity,
        image,
        description,
      })
      .then((res) => {
        if (res.error) {
          setExistingProductVals({
            ...existingProductVals,
            error: res.error,
            success: false,
          });
        } else {
          setExistingProductVals({
            name: "",
            price: "",
            category: "",
            quantity: "",
            image: "",
            description: "",
            deleteChecked: existingProductVals.deleteChecked,
            error: "",
            success: "Product Updated!",
          });
          setTimeout(() => {
            setExistingProductVals({
              name: "",
              price: "",
              category: "",
              quantity: "",
              image: "",
              description: "",
              deleteChecked: existingProductVals.deleteChecked,
              error: "",
              success: false,
            });
          }, 1500);
          loadProducts();
        }
      })
      .catch((err) => {
        setExistingProductVals({
          ...existingProductVals,
          error: err.response.data.error,
          success: false,
        });
      });
  };

  const handleExistingProdSubmit = (event) => {
    event.preventDefault();
    setExistingProductVals({
      ...existingProductVals,
      error: false,
      success: false,
    });
    if (existingProductVals.name) {
      let productId = "";
      products.forEach((product) => {
        if (product.name === existingProductVals.name) {
          productId = product._id;
        }
      });
      if (existingProductVals.deleteChecked) {
        deleteExisting(productId);
      } else {
        updateExisting(productId);
      }
    }
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="title page-title has-text-centered is-2">
            ADMIN DASHBOARD
          </div>
          <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent">
              <div className="tile is-child">
                <div className="form-container">
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
                    <div className="field is-horizontal">
                      <div className="field-label"></div>
                      <div className="field-body">
                        <SubmitBtn onSubmit={handleNewProdSubmit} />
                      </div>
                    </div>
                    <HelpText
                      toggle={newProductVals.error}
                      textSize="6"
                      color="is-danger"
                    >
                      {newProductVals.error}
                    </HelpText>
                    <HelpText
                      toggle={newProductVals.success}
                      textSize="6"
                      color="is-success"
                    >
                      New Product Added!
                    </HelpText>
                  </Form>
                </div>
              </div>
              <div className="tile is-child">
                <div className="container form-container">
                  <Form title="UPDATE PRODUCT">
                    <Dropdown
                      name="name"
                      label="Name:"
                      onChange={handleExistingProdChange}
                      value={existingProductVals.name}
                      products={products}
                    />
                    {existingProductVals.deleteChecked ||
                    existingProductVals.name === "" ? (
                      <fieldset disabled>
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
                      </fieldset>
                    ) : (
                      <>
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
                      </>
                    )}
                    <div className="field is-horizontal" id="update-controls">
                      <div className="field-label"></div>
                      <div className="field-body">
                        <SubmitBtn onSubmit={handleExistingProdSubmit} />
                        <CheckBox
                          name="deleteChecked"
                          label="Delete Product"
                          onChange={handleCheckboxChange}
                          isSelected={existingProductVals.deleteChecked}
                        />
                      </div>
                    </div>
                    <HelpText
                      toggle={existingProductVals.error}
                      textSize="6"
                      color="is-danger"
                    >
                      {existingProductVals.error}
                    </HelpText>
                    <HelpText
                      toggle={existingProductVals.success}
                      textSize="6"
                      color="is-success"
                    >
                      {existingProductVals.success}
                    </HelpText>
                  </Form>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child tile-overflow">
                <OrdersTable title="UNFILLED ORDERS" orders={orders} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
