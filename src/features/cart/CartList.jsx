import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

export default function CartList() {
  const { cart } = useCart();

  return (
    <div className="cart-items">
      {cart.length === 0 ? (
        <p className="cart-empty">your bag is empty</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} {...item} />)
      )}
    </div>
  );
}
