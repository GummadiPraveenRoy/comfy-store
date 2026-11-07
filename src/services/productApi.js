import { ALL_PRODUCTS_URL, SINGLE_PRODUCT_URL } from '../utils/constants';

// turn an API record into the flat shape used across the app
export const normalizeProduct = (product) => {
  const {
    id,
    fields: { featured, name, price, company, colors, image, description },
  } = product;
  return {
    id,
    featured,
    name,
    price,
    company,
    colors,
    description,
    image: image[0].thumbnails.large.url,
  };
};

export const fetchProducts = async () => {
  const response = await fetch(ALL_PRODUCTS_URL);
  if (!response.ok) throw new Error('Could not load products');
  const data = await response.json();
  return data.map(normalizeProduct);
};

export const fetchSingleProduct = async (id) => {
  const response = await fetch(`${SINGLE_PRODUCT_URL}?id=${id}`);
  if (!response.ok) throw new Error('Product not found');
  return normalizeProduct(await response.json());
};
