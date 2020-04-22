import axios from "axios";

export default {
  createOrder: function (userId, token, createOrderData) {
    return axios.post(`/api/order/create/${userId}`, createOrderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
