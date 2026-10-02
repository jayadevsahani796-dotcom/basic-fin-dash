// Pure helpers shared by the cards and the table.

export function filterTransactions(transactions, query, typeFilter) {
  const text = query.trim().toLowerCase();
  return transactions.filter((t) => {
    const matchesType = typeFilter === "ALL" || t.type === typeFilter;
    const matchesText =
      text === "" ||
      t.customer.toLowerCase().includes(text) ||
      t.documentNumber.toLowerCase().includes(text);
    return matchesType && matchesText;
  });
}

export function summarize(transactions) {
  let billingTotal = 0;
  let rtgsMagnitude = 0;
  for (const t of transactions) {
    if (t.type === "BILLING") {
      billingTotal += t.amount;
    } else if (t.type === "RTGS") {
      rtgsMagnitude += Math.abs(t.amount);
    }
  }
  return { count: transactions.length, billingTotal, rtgsMagnitude };
}

// Signed amount with exactly two decimals, e.g. -125000 -> "-125000.00".
export function formatAmount(amount) {
  const sign = amount < 0 ? "-" : "";
  return `${sign}${Math.abs(amount).toFixed(2)}`;
}
