import { resolveInclude } from "ejs";
import Product from "../models/productSchema.js";

export const getProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    return error;
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
