import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  return res.data;
};
