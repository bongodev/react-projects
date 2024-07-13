import { useContext } from 'react';
import { CartContext } from '../../contexts';

export function RightPanel() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((cartItem) => (
          <li
            key={cartItem.id}
          >{`${cartItem.name} - $${cartItem.price} x 1`}</li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
}
