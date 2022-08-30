import { products } from './constants/data.js'
import product from './models/productSchema.js'

const defaultData = () => {
    try {
        product.insertMany(products)
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
}

export default defaultData;