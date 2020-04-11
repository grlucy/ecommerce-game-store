const { User } = require("../models");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error,
      });
    }
    res.json({
      user,
    });
  });
};
