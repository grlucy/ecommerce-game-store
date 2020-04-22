import axios from "axios";

export default {
  getPurchaseHistory: function (userId, token) {
    return axios.get(`api/user/order-history/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
