const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dragonsden");

// -------------------------------------------------------------------------------------
// PRODUCTS

const productSeed = [
  {
    name: "Classic Chess Set",
    price: 29.99,
    category: "Board Games",
    quantity: 25,
    image: "https://via.placeholder.com/500?text=No+Image+Found",
    description:
      "A classic wooden chess set in black and white. Pieces can be stored inside of hinged game board.",
  },
  {
    name: "Wooden Checkers Set",
    price: 26.99,
    category: "Board Games",
    quantity: 30,
    image: "https://via.placeholder.com/500?text=No+Image+Found",
    description:
      'A classic wooden checkers set in red and white. Dimensions: 12"x12".',
  },
  {
    name: "Mahjong Set",
    price: 35.99,
    category: "Board Games",
    quantity: 10,
    image: "https://via.placeholder.com/500?text=No+Image+Found",
    description:
      "A game of skill using a set of 144 tiles. Includes rulebook with five regional variations.",
  },
  {
    name: "1,000 Piece Puzzle",
    price: 24.99,
    category: "Puzzles",
    quantity: 10,
    image: "https://via.placeholder.com/500?text=No+Image+Found",
    description:
      "A 1,000-piece puzzle that depicts a photograph of a cityscape.",
  },
  {
    name: "500 Piece Puzzle",
    price: 19.99,
    category: "Puzzles",
    quantity: 15,
    image: "https://via.placeholder.com/500?text=No+Image+Found",
    description: "A 500-piece puzzle that depicts a painting of flowers.",
  },
  {
    name: "30 Piece Puzzle",
    price: 12.99,
    category: "Puzzles",
    quantity: 35,
    image: "https://via.placeholder.com/500?text=No+Image+Found",
    description:
      "A 30-piece puzzle ideal for young children that depicts cartoon barnyard animals.",
  },
];

db.Product.deleteMany({}, function (err) {})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then((data) => {
    console.log(data.result.n + " product records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
