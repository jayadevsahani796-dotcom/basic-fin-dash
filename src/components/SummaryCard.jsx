export default function SummaryCard({ label, value }) {
  return (
    <section className="summary-card" aria-label={label}>
      <p className="summary-card__label">{label}</p>
      <p className="summary-card__value">{value}</p>
    </section>
  );
}
