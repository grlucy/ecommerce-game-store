const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      maxlength: 100,
      required: true,
    },
    quantity: {
      type: Number,
      trim: true,
      required: true,
      min: [0, "insufficient stock"],
    },
    image: {
      type: String,
      trim: true,
      default: "https://via.placeholder.com/500?text=No+Image+Found",
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000,
      required: true,
    },
    numberSold: {
      type: Number,
      trim: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
