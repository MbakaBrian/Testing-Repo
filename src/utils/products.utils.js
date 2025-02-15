import Product from "../models/products.models.js";
import Categories from "../models/categories.models.js";
/**
 * Checks if a product with the given SKU exists in the database.
 *
 * @param {string} SKU - The SKU of the product to check.
 * @return {Promise<boolean>} A promise that resolves to true if the product exists, false otherwise.
 */
export const productExists = async (SKU) => {
    try {
      const existingProduct = await Product.findOne({SKU});
      return !!existingProduct;
    } catch (error) {
      console.error('Error checking product existence:', error);
      return false; 
    }
  };

  export const categoryExists = async (LevelNames) => {
    try {
      const existingCategory = await Categories.findOne({Category:{$in:LevelNames}});
      return !!existingCategory;
    } catch (error) {
      console.error('Error checking category existence:', error);
      return false; 
    }
  };