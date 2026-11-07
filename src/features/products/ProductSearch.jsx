export default function ProductSearch({ value, onChange }) {
  return (
    <form className="input-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-input"
        placeholder="search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
}
