import { Product } from "../models/index.js";

export const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  await newProduct.save();
  return newProduct;
};

export const getAllProducts = async ({
  search = "",
}) => {
  const products = await Product.find({
    $or: [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ],
  })
    .select("id name description price createdAt")
    .sort({ createdAt: -1 });
  return products;
};
