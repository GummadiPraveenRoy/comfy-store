export default function PriceFilter({ value, max, onChange }) {
  return (
    <>
      <form className="price-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="range"
          className="price-filter"
          min="699"
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </form>
      <p className="price-value">Value : ₹{value}</p>
    </>
  );
}
