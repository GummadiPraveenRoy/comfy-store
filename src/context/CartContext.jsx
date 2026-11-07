/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { CART_KEY } from '../utils/constants';

const CartContext = createContext(null);

const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.find((i) => i.id === action.product.id);
      if (exists) {
        return state.map((i) =>
          i.id === exists.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...state, { ...action.product, amount: 1 }];
    }
    case 'REMOVE':
      return state.filter((i) => i.id !== action.id);
    case 'INCREASE':
      return state.map((i) =>
        i.id === action.id ? { ...i, amount: i.amount + 1 } : i
      );
    case 'DECREASE':
      return state
        .map((i) => (i.id === action.id ? { ...i, amount: i.amount - 1 } : i))
        .filter((i) => i.amount > 0);
    default:
      return state;
  }
}

/**
 * Interface for other modules:
 *   const { addToCart, itemCount, openCart } = useCart();
 *   addToCart(product)  // product from useProducts / fetchSingleProduct
 */
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, undefined, loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      /* ignore */
    }
  }, [cart]);

  const value = useMemo(
    () => ({
      cart,
      isOpen,
      itemCount: cart.reduce((n, i) => n + i.amount, 0),
      total: cart.reduce((sum, i) => sum + i.price * i.amount, 0),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addToCart: (product) => {
        dispatch({ type: 'ADD', product });
        setIsOpen(true);
      },
      removeItem: (id) => dispatch({ type: 'REMOVE', id }),
      increaseAmount: (id) => dispatch({ type: 'INCREASE', id }),
      decreaseAmount: (id) => dispatch({ type: 'DECREASE', id }),
    }),
    [cart, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
