import { products } from "./constants/data.js";
import { getProducts } from "./controller/productController.js";
import product from "./models/productSchema.js";

const defaultData = async () => {
  const prod = await getProducts();

  if (!prod) {
    try {
      await product.insertMany(products);
      console.log("Data imported successfully");
    } catch (error) {
      console.log("Error while inserting default data", error.message);
    }
  } else {
    return;
  }
};

export default defaultData;
