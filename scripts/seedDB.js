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
    image: "assets/images/stock-photos/products/chess2.jpg",
    description:
      "A classic wooden chess set in black and white. Pieces can be stored inside of hinged game board.",
    numberSold: 8,
  },
  {
    name: "Giant Checkers Set",
    price: 56.99,
    category: "Board Games",
    quantity: 0,
    image: "assets/images/stock-photos/products/checkers.jpg",
    description:
      "A giant black and white checkerboard perfect for your next party. Dimensions: 6' x 6'",
    numberSold: 5,
  },
  {
    name: "Mahjong Set",
    price: 35.99,
    category: "Board Games",
    quantity: 10,
    image: "assets/images/stock-photos/products/mahjong.jpg",
    description:
      "A game of skill using a set of 144 tiles. Includes rulebook with five regional variations.",
    numberSold: 1,
  },
  {
    name: "1,000 Piece Puzzle",
    price: 32.99,
    category: "Puzzles",
    quantity: 10,
    image: "assets/images/stock-photos/products/skylinepuzzle.jpg",
    description:
      "A 1,000-piece puzzle that features a photograph of a cityscape.",
    numberSold: 12,
  },
  {
    name: "500 Piece Puzzle",
    price: 19.99,
    category: "Puzzles",
    quantity: 15,
    image: "assets/images/stock-photos/products/flowerpuzzle.jpg",
    description:
      "A 500-piece puzzle that features a photograph of white flowers.",
    numberSold: 2,
  },
  {
    name: "30 Piece Puzzle",
    price: 12.99,
    category: "Puzzles",
    quantity: 0,
    image: "assets/images/stock-photos/products/puppypuzzle.jpg",
    description:
      "A 30-piece puzzle ideal for young children that features a photograph of a puppy.",
    numberSold: 25,
  },
  {
    name: "Deck of Playing Cards",
    price: 4.99,
    category: "Cards",
    quantity: 50,
    image: "assets/images/stock-photos/products/cards.jpg",
    description:
      "A standard French-suited deck of 52 playing cards. Includes jokers.",
    numberSold: 14,
  },
  {
    name: "Ultra-Rare Trading Card, Mint Condition",
    price: 154.99,
    category: "Cards",
    quantity: 1,
    image: "https://via.placeholder.com/500?text=No+Image+Found",
    description:
      "A mint condition, holographic trading card featuring a red cartoon dragon made popular in a beloved children's anime series.",
    numberSold: 0,
  },
  {
    name: "Tarot Deck",
    price: 28.99,
    category: "Cards",
    quantity: 40,
    image: "assets/images/stock-photos/products/tarot.jpg",
    description:
      "A deck of 78 divinatory cards featuring the late 15th century art of the Sola Busca tarot.",
    numberSold: 10,
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
