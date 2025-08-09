import { useQuery } from "@tanstack/react-query";
import { productServices } from "../services";

const PRODUCT_QUERY_KEY = "product-query-key";

export const useProductQuery = () => {
  const productQuery = useQuery({
    queryKey: [PRODUCT_QUERY_KEY],
    queryFn: productServices.getProducts,
  });

  return {
    data: productQuery.data || [],
    isLoading: productQuery.isPending,
    error: productQuery.error,
  };
};
