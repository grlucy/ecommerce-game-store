export const addItem = (item, qty, next) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: qty
    });

    //This code removes duplicate instances of an item from the cart
    //new Set does not allow dup values, so we pass it the ids
    //Then run map on the resulting array of ids to map back to actual product object
    cart = Array.from(new Set(cart.map((p) => (p._id)))).map((id) => {
      return cart.find(p => p._id === id);
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
}

export const itemTotal = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart")).length;
    }
  }
  return 0;
};

export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
  return [];
};

export const updateCart = (items) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }
}