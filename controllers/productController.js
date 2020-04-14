const { Product } = require("../models");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.product);
};

exports.create = (req, res) => {
  const product = new Product(req.body);
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      product,
    });
  });
};

exports.remove = (req, res) => {
  const { product } = req;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: `${deletedProduct.name} deleted successfully`,
    });
  });
};

exports.update = (req, res) => {
  req.product.name = req.body.name;
  req.product.price = req.body.price;
  req.product.category = req.body.category;
  req.product.quantity = req.body.quantity;
  req.product.description = req.body.description;
  if (!req.body.image) {
    req.product.image = "https://via.placeholder.com/500?text=No+Image+Found";
  } else {
    req.product.image = req.body.image;
  }
  const product = req.product;
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      product,
    });
  });
};

// Get list of products that can be filtered by category and/or in-stock-only
// and that will be sorted by descending popularity (default) or ascending price
exports.list = (req, res) => {
  let selector = {};
  if (req.query.category) {
    selector[category] = req.query.category;
  }
  if (req.query.available) {
    selector[quantity] = { $gte: 1 };
  }
  if (req.query.sort === "price") {
    Product.find(selector)
      .sort({ price: 1 })
      .exec((err, products) => {
        if (err) {
          return res.status(400).json({
            error: "Products not found",
          });
        }
        res.json(products);
      });
  } else {
    Product.find(selector)
      .sort({ numberSold: -1 })
      .exec((err, products) => {
        if (err) {
          return res.status(400).json({
            error: "Products not found",
          });
        }
        res.json(products);
      });
  }
};
