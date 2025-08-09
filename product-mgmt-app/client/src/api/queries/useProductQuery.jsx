import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "./useDebounce";
import { productServices } from "../services";

const PRODUCT_QUERY_KEY = "product-query-key";

export const useProductQuery = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce({ value: search, delay: 500 });

  const productQuery = useQuery({
    queryKey: [PRODUCT_QUERY_KEY, debouncedSearch],
    queryFn: () => productServices.getProducts({ search: debouncedSearch }),
  });

  return {
    data: productQuery.data || [],
    isLoading: productQuery.isPending,
    error: productQuery.error,
    search,
    setSearch,
  };
};
