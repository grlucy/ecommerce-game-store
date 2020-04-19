import axios from "axios";

export default {
  createProduct: function(userId, token, product) {
    return axios.post(`/api/product/create/${userId}`, product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};