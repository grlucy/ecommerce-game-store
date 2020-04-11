const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// database
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/dragonsden", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routes middleware
app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
