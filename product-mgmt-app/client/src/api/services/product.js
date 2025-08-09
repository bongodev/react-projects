import http from "../../config/http";

export const getProducts = async ({ search = "" } = {}) => {
  const res = await http.get("/api/products", {
    params: { search },
  });
  return res.data;
};
