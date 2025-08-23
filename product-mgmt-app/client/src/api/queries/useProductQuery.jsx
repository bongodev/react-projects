import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useDebounce } from './useDebounce';
import { productServices } from '@api/services';
import { toast } from 'sonner';

const PRODUCT_QUERY_KEY = 'product-query-key';

export const useProductQuery = () => {
  const [search, setSearch] = useState('');

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

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: (product) => productServices.createProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCT_QUERY_KEY] });
      toast.success('Product created successfully', {
        duration: 4000,
        position: 'bottom-left',
      });
    },
    onError: (error) => {
      console.error('Error creating product:', error);
      toast.error('Failed to create product', {
        duration: 4000,
        position: 'bottom-left',
      });
    },
  });

  return productMutation;
};
