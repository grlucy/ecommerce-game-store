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
  }
};