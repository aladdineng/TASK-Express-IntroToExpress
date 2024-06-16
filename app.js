const express = require("express");
const products = require("./products");

const app = express();

app.get("/products", (req, res) => {
  return res.json({ products });
});

app.listen(8088, () => {
  console.log("Hello World");
});
