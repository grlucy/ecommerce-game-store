const { Product } = require("../models");

exports.create = (req, res) => {
  const product = new Product(req.body);
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      product,
    });
  });
};
