exports.userSignupValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "Email is required")
    .notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @");
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.productValidator = (req, res, next) => {
  // Required fields validation
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.quantity ||
    !req.body.category ||
    !req.body.description
  ) {
    return res.status(400).json({
      error:
        "Product name, price, category, quantity, and description are required fields",
    });
  }

  // Field length validation
  if (req.body.name.length > 100) {
    return res.status(400).json({
      error: "Product name must be 100 characters or less",
    });
  }
  if (req.body.category.length > 100) {
    return res.status(400).json({
      error: "Product category must be 100 characters or less",
    });
  }
  if (req.body.description.length > 1000) {
    return res.status(400).json({
      error: "Product description must be 1,000 characters or less",
    });
  }

  // Field type validation
  if (isNaN(req.body.price) || isNaN(req.body.quantity)) {
    return res.status(400).json({
      error: "Product price and quantity must be numbers",
    });
  }

  next();
};
