import axios from "axios";

export default {
  createProduct: function(userId, token, product) {
    return axios.post(`/api/product/create/${userId}`, product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  getProducts: function() {
    return axios.get("api/products/list");
  },

  getProduct: function(productId) {
    return axios.get(`api/product/${productId}`);
  },

  updateProduct: function(userId, token, productId, productData) {
    return axios.put(`api/product/${productId}/${userId}`, productData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  deleteProduct: function(userId, token, productId) {
    return axios.delete(`api/product/${productId}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};