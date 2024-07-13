import { useContext } from 'react';
import logo from '../../logo.svg';

import { CartContext } from '../../contexts';

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="productCard">
      <img src={logo} alt="Product image" width="200px" />
      <p>{product.name}</p>
      <p>{`$${product.price}`}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
