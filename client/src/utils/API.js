import axios from "axios";

export default {
  signUp: function(user) {
    return axios.post("/api/auth/signup", user);
  },

  signIn: function(user) {
    return axios.post("/api/auth/signin", user);
  },

  signOut: function() {
    return axios.get("api/auth/signout");
  },

  getProducts: function() {
    return axios.get("api/products/list");
  },

  getProduct: function(productId) {
    return axios.get(`api/product/${productId}`);
  },

  getCategories: function() {
    return axios.get("api/products/categories");
  },

  getBraintreeClientToken: function(userId, token) {
    return axios.get(`api/braintree/getToken/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },

  processPayment: function(userId, token, paymentData) {
    return axios.post(`api/braintree/payment/${userId}`, paymentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }
};