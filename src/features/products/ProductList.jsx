import ProductCard from '../../components/ProductCard';

export default function ProductList({ products }) {
  if (products.length < 1) {
    return (
      <h3 className="filter-error">sorry, no products matched your search</h3>
    );
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
