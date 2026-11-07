import { useCart } from '../context/CartContext';
import CartList from '../features/cart/CartList';
import CartTotal from '../features/cart/CartTotal';

export default function CartSidebar() {
  const { isOpen, closeCart } = useCart();

  return (
    <div
      className={`cart-overlay ${isOpen ? 'show' : ''}`}
      onClick={(e) => e.target === e.currentTarget && closeCart()}
    >
      <aside className="cart">
        <button className="cart-close" onClick={closeCart}>
          <i className="fas fa-times"></i>
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>
        <CartList />
        <CartTotal />
      </aside>
    </div>
  );
}
