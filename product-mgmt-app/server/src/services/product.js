import { Product } from '../models/index.js';

export const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  await newProduct.save();
  return newProduct;
};

export const getAllProducts = async ({ search = '' }) => {
  let query = {};
  if (search) {
    query = {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ],
    };
  }

  const products = await Product.find(query)
    .select('id name description price createdAt stockQuantity')
    .sort({ createdAt: -1 });
  return products;
};

export const updateProduct = async (productData) => {
  const { _id, ...updateData } = productData;
  const updatedProduct = await Product.findByIdAndUpdate(_id, updateData, {
    new: true,
  });
  return updatedProduct;
};
