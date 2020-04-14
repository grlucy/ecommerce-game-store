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
  req
    .check("name", "Product name is required")
    .notEmpty()
    .isLength({ min: 1, max: 100 })
    .withMessage("Product name must be 100 characters or less");
  req
    .check("price", "Price is required")
    .notEmpty()
    .isFloat()
    .withMessage("Price must be a number");
  req
    .check("quantity", "Quantity is required")
    .notEmpty()
    .isInt()
    .withMessage("Quantity must be an integer");
  req
    .check("category", "Category is required")
    .notEmpty()
    .isLength({ min: 1, max: 100 })
    .withMessage("Category must be 100 characters or less");
  req
    .check("description", "Description is required")
    .notEmpty()
    .isLength({ min: 1, max: 1000 })
    .withMessage("Description must be 1,000 characters or less");
  if (req.body.image !== "") {
    req.check("image").isURL().withMessage("Image must be URL");
  }

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};
