import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import ProductList from '../features/products/ProductList';
import ProductSearch from '../features/products/ProductSearch';
import CompanyFilter from '../features/products/CompanyFilter';
import PriceFilter from '../features/products/PriceFilter';
import useProducts from '../hooks/useProducts';
import { Loading } from '../components/Loading';

export default function Products() {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState('');
  const [company, setCompany] = useState('all');
  // null = no limit chosen yet -> use the max price
  const [priceLimit, setPriceLimit] = useState(null);

  const companies = useMemo(
    () => ['all', ...new Set(products.map((p) => p.company))],
    [products]
  );
  const maxPrice = useMemo(
    () => Math.ceil(Math.max(0, ...products.map((p) => p.price))),
    [products]
  );
  const price = priceLimit ?? maxPrice;

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().startsWith(search.toLowerCase()) &&
      (company === 'all' || p.company === company) &&
      p.price<= price
  );

  if (loading && products.length === 0) {
    return (
      <div className="page-loading">
        <h2><Loading/></h2>
      </div>
    );
  }

  return (
    <>
      <PageHero title="Home / Products" />
      <section className="products">
        <div className="filters">
          <div className="filters-container">
            <ProductSearch value={search} onChange={setSearch} />
            <h4>Company</h4>
            <CompanyFilter
              companies={companies}
              selected={company}
              onSelect={setCompany}
            />
            <h4>Price</h4>
            <PriceFilter value={price} max={maxPrice} onChange={setPriceLimit} />
          </div>
        </div>
        <div className="products-wrapper">
          <ProductList products={filtered} />
        </div>
      </section>
    </>
  );
}
