const { Order, CartItem } = require("./order");

module.exports = {
  Product: require("./product"),
  User: require("./user"),
  Order: Order,
  CartItem: CartItem,
};
