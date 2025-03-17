const { ObjectId } = require("mongodb");
const { productCollections } = require("../../utils/dbConnect");

// Product post

const postProduct = async (req,res) => {
    const product = req.body
    try {
     const result = await productCollections.insertOne(product);
     console.log(result)
     res.status(201).send(result);
   } catch (error) {
     console.error(error);
     res.status(400).send({ message: 'Something went wrong' });
   }
   }


   
// Get all products
const getAllProducts = async (req, res) => {
    try {
      const collection = await productCollections;
      const result = await collection.find().toArray();
  
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
// Get  product by id
const getProductById = async (req, res) => {
    const {id} = req.params
    try {
        const query = {
            _id : new ObjectId(id)
        }
      const collection = await productCollections 
      const result = await collection.findOne(query)
  
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

module.exports={postProduct, getAllProducts, getProductById}