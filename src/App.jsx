import { useMemo, useState } from "react";
import "./index.css";
import transactions from "./data/transactions";
import { filterTransactions, formatAmount, summarize } from "./utils/finance";
import SummaryCard from "./components/SummaryCard";
import FilterBar from "./components/FilterBar";
import TransactionTable from "./components/TransactionTable";

export default function App() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("ALL");

  const filtered = useMemo(
    () => filterTransactions(transactions, query, typeFilter),
    [query, typeFilter]
  );
  const summary = useMemo(() => summarize(filtered), [filtered]);

  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">FinanceView</h1>
        <p className="dashboard__subtitle">
          Billing and RTGS overview · Local currency
        </p>
      </header>

      <section className="dashboard__cards" aria-label="Summary">
        <SummaryCard
          label="Filtered transactions"
          value={String(summary.count)}
        />
        <SummaryCard
          label="Billing total"
          value={formatAmount(summary.billingTotal)}
        />
        <SummaryCard
          label="RTGS total (magnitude)"
          value={formatAmount(summary.rtgsMagnitude)}
        />
      </section>

      <FilterBar
        query={query}
        onQueryChange={setQuery}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
      />

      <section className="dashboard__table" aria-label="Transactions">
        <TransactionTable transactions={filtered} />
      </section>
    </main>
  );
}
