import { useProducts } from '../../api/hooks';

import { ProductCard } from './ProductCard';

import './ProductGrid.css';

const ProductsEmptyState = () => <h1>No products to display</h1>;

export const ProductGrid = () => {
  const { products } = useProducts();

  return (
    <div className="productGrid">
      {products.length === 0 ? (
        <ProductsEmptyState />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
