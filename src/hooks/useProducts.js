import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productApi';
import { STORE_KEY } from '../utils/constants';

// replaces the old store.js: products are cached in localStorage,
// and one shared request is used no matter how many components call the hook.
const readCache = () => {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
  } catch {
    return [];
  }
};

let inFlight = null;
const loadOnce = () => {
  if (!inFlight) {
    inFlight = fetchProducts()
      .then((data) => {
        try {
          localStorage.setItem(STORE_KEY, JSON.stringify(data));
        } catch {
          /* storage unavailable */
        }
        return data;
      })
      .finally(() => {
        inFlight = null;
      });
  }
  return inFlight;
};

/**
 * Interface for other modules:
 *   const { products, loading, error } = useProducts();
 * product = { id, name, price (cents), company, colors, image, featured, description }
 */
export default function useProducts() {
  const [products, setProducts] = useState(readCache);
  const [loading, setLoading] = useState(products.length === 0);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    loadOnce()
      .then((data) => !ignore && setProducts(data))
      .catch((err) => !ignore && setError(err.message))
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
    };
  }, []);

  return { products, loading, error };
}
