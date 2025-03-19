const express = require("express");
const {
  postProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
} = require("./product.controller");
const productRouter = express.Router();

// ! Product post in the database
productRouter.post("/products", postProduct);
productRouter.get("/products", getAllProducts);
productRouter.get("/products/:id", getProductById);
productRouter.delete("/products/:id", deleteProductById);

module.exports = { productRouter };
