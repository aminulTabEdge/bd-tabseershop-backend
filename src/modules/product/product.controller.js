const { ObjectId } = require("mongodb");
const { productCollections } = require("../../utils/dbConnect");

// Product post

const postProduct = async (req, res) => {
  const product = req.body;
  try {
    const result = await productCollections.insertOne(product);
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Something went wrong" });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const collection = await productCollections;
    const { menu } = req.query;

    let query = {};
    if (menu) {
      query.menu = { $regex: new RegExp(menu, "i") };
    }

    const result = await collection.find(query).toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get  product by id
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const query = {
      _id: new ObjectId(id),
    };
    const collection = await productCollections;
    const result = await collection.findOne(query);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Deleyte product by id
const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const query = { _id: new ObjectId(id) };
    const result = await productCollections.deleteOne(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  postProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
};
