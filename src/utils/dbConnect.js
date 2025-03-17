require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const DB = client.db("tabseerShopDB");
// Use DB.collection() instead of createCollection to get the collection
const productCollections = DB.collection("products");
const orderCollections = DB.collection("orders");

const dbConnect = async () => {
  return client.connect();
};

module.exports = { dbConnect, productCollections, orderCollections };
