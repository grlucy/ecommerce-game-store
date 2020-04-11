const { User } = require("../models");
const jwt = require("jsonwebtoken"); // Used to generate signed token
const expressJwt = require("express-jwt"); // Used for authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }

    // Do not return salt or hashed_password in response
    user.salt = undefined;
    user.hashed_password = undefined;

    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  // Find user
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `No user found for email: ${email}`,
      });
    }

    // Authenticate user
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Password is incorrect.",
      });
    }

    // Create web token and save in cookie
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { expire: new Date() + 9999 });

    // Send user and token to front end
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};
