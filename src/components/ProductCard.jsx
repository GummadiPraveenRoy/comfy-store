import { Link } from 'react-router-dom';
import '../utils/formatPrice';

const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;

  return (
    <article className="product">
      <div className="product-container">
        <img
          src={image}
          className="product-img img"
          alt={name}
        />

        <div className="product-icons">
          <Link
            to={`/product/${id}`}
            className="product-icon"
            aria-label={`View ${name}`}
          >
            <i className="fas fa-search"></i>
          </Link>

          <button
            className="product-cart-btn product-icon"
            aria-label={`Add ${name} to cart`}
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>

      <footer>
        <p className="product-name">{name}</p>
        <h4 className="product-price">{formatPrice(price)}</h4>
      </footer>
    </article>
  );
};

export default ProductCard;