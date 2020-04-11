const mongoose = require("mongoose");
const crypto = require("crypto"); // Used to hash password
const uuidv1 = require("uuid/v1"); // Used to create long, unique string for salt

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      required: true,
      default: "Customer",
      enum: ["Customer", "Admin"],
    },
    orderHistory: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// Password is a virtual field; hashed_password stores the encrypted password
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
