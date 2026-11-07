import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';
import { Loading } from '../components/Loading';

export default function Home() {
  const { products, loading } = useProducts();
  const featured = products.filter((p) => p.featured === true);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="text-slanted">rest, relax, unwind</h1>
          <h3>Embrace your choices - we do</h3>
          <Link to="/products" className="hero-btn">
            show now
          </Link>
        </div>
      </section>

      <section className="section featured">
        <div className="title">
          <h2>
            <span>/</span> featured
          </h2>
        </div>
        <div className="featured-center section-center">
          {loading && featured.length === 0 ? (
            <h2 className="section-loading"><Loading/></h2>
          ) : (
            featured.map((p) => <ProductCard key={p.id} product={p} />)
          )}
        </div>
        <Link to="/products" className="btn">
          all products
        </Link>
      </section>
    </>
  );
}
