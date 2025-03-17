const express = require("express");
const { postProduct, getAllProducts, getProductById } = require("./product.controller");
const productRouter = express.Router();

// ! Product post in the database
productRouter.post('/products', postProduct )
productRouter.get('/products', getAllProducts)
productRouter.get('/products/:id', getProductById)


module.exports={productRouter} 