import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';

export default function CartTotal() {
  const { total } = useCart();

  return (
    <footer>
      <h3 className="cart-total text-slanted">Total : {formatPrice(total)}</h3>
      <button className="cart-checkout btn">checkout</button>
    </footer>
  );
}
