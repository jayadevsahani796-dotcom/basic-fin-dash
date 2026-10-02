const FILTERS = [
  { value: "ALL", label: "All" },
  { value: "BILLING", label: "BILLING" },
  { value: "RTGS", label: "RTGS" },
];

export default function FilterBar({
  query,
  onQueryChange,
  typeFilter,
  onTypeChange,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__search">
        <label className="filter-bar__label" htmlFor="transaction-search">
          Search customer or document
        </label>
        <input
          id="transaction-search"
          className="filter-bar__input"
          type="search"
          value={query}
          placeholder="e.g. Northwind or INV-2026-001"
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>
      <div
        className="filter-bar__types"
        role="group"
        aria-label="Filter by transaction type"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={
              "filter-bar__button" +
              (typeFilter === filter.value
                ? " filter-bar__button--active"
                : "")
            }
            aria-pressed={typeFilter === filter.value}
            onClick={() => onTypeChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
