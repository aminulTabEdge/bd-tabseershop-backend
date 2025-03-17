const express = require("express");
const cors = require("cors");
const { productRouter } = require("./modules/product/product.routes");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Product Routes
app.use("/api/v1", productRouter);

// Playgrounds

// Initial Route
app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "🏃 Server is running",
  });
});

module.exports = { app };
