// Six clearly labelled demo records.
// BILLING amounts are positive; RTGS amounts are negative (money out).
const transactions = [
  {
    id: 1,
    type: "BILLING",
    customer: "Northwind Traders",
    documentNumber: "INV-2026-001",
    postingDate: "2026-01-05",
    amount: 48250.5,
  },
  {
    id: 2,
    type: "RTGS",
    customer: "Acme Logistics",
    documentNumber: "RTGS-88231",
    postingDate: "2026-01-08",
    amount: -125000,
  },
  {
    id: 3,
    type: "BILLING",
    customer: "Globex Corporation",
    documentNumber: "INV-2026-002",
    postingDate: "2026-01-12",
    amount: 76900,
  },
  {
    id: 4,
    type: "RTGS",
    customer: "Northwind Traders",
    documentNumber: "RTGS-88457",
    postingDate: "2026-01-15",
    amount: -54000,
  },
  {
    id: 5,
    type: "BILLING",
    customer: "Initech Solutions",
    documentNumber: "INV-2026-003",
    postingDate: "2026-01-19",
    amount: 23750.25,
  },
  {
    id: 6,
    type: "RTGS",
    customer: "Umbrella Freight",
    documentNumber: "RTGS-89012",
    postingDate: "2026-01-23",
    amount: -98100,
  },
];

export default transactions;
