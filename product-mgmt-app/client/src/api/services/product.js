import http from '@/config/http';

export const createProduct = async (product) => {
  const res = await http.post('/api/products', product);
  return res.data;
};

export const updateProduct = async (product) => {
  const res = await http.put(`/api/products/${product._id}`, product);
  return res.data;
};

export const getProducts = async ({ search = '' } = {}) => {
  const res = await http.get('/api/products', {
    params: { search },
  });
  return res.data;
};
