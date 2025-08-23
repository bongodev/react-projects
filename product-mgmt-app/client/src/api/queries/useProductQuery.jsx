import { toast } from 'sonner';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useDebounce } from './useDebounce';
import { productServices } from '@api/services';

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
    mutationFn: (product) => {
      if (product._id) {
        return productServices.updateProduct(product);
      }
      productServices.createProduct(product);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: [PRODUCT_QUERY_KEY] });
      const isUpdate = Boolean(variables._id);
      toast.success(
        `Product ${isUpdate ? 'updated' : 'created'} successfully`,
        {
          duration: 4000,
          position: 'bottom-left',
        }
      );
    },
    onError: (error, variables) => {
      console.error('Error creating product:', error);
      const isUpdate = Boolean(variables._id);
      toast.error(`Failed to ${isUpdate ? 'update' : 'create'} product`, {
        duration: 4000,
        position: 'bottom-left',
      });
    },
  });

  return productMutation;
};
