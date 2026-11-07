export default function CompanyFilter({ companies, selected, onSelect }) {
  return (
    <article className="companies">
      {companies.map((company) => (
        <button
          key={company}
          className={`company-btn ${selected === company ? 'active' : ''}`}
          onClick={() => onSelect(company)}
        >
          {company}
        </button>
      ))}
    </article>
  );
}
