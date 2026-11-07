import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useCart } from '../context/CartContext';
import { fetchSingleProduct } from '../services/productApi';
import { formatPrice } from '../utils/formatPrice';

export default function SingleProduct() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(false);
    fetchSingleProduct(id)
      .then((data) => {
        if (ignore) return;
        setProduct(data);
        setSelectedColor(data.colors?.[0] ?? null);
        document.title = `${data.name.toUpperCase()} | Comfy`;
      })
      .catch(() => !ignore && setError(true))
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
      document.title = 'Comfy';
    };
  }, [id]);

  if (loading) {
    return (
      <div className="page-loading">
        <h2>loading...</h2>
      </div>
    );
  }

  if (error || !product) {
    return (
      <>
        <PageHero title="Home / Single Product" />
        <section className="single-product">
          <div className="section-center single-product-center">
            <div>
              <h3 className="error">sorry, something went wrong</h3>
              <Link to="/" className="btn">
                back home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const { name, company, price, colors, description, image } = product;

  return (
    <>
      <PageHero title={`Home / ${name}`} />
      <section className="single-product">
        <div className="section-center single-product-center">
          <img src={image} className="single-product-img img" alt={name} />
          <article className="single-product-info">
            <div>
              <h2 className="single-product-title">{name}</h2>
              <p className="single-product-company text-slanted">
                by {company}
              </p>
              <p className="single-product-price">{formatPrice(price)}</p>
              <div className="single-product-colors">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    aria-label={`select color ${color}`}
                    className={`product-color color-btn ${
                      selectedColor === color ? 'selected' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
              <p className="single-product-desc">{description}</p>
              <button
                className="addToCartBtn btn"
                onClick={() => addToCart({ ...product, selectedColor })}
              >
                add to cart
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
