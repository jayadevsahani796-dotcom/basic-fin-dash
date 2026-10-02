import { formatAmount } from "../utils/finance";

export default function TransactionTable({ transactions }) {
  return (
    <table className="transaction-table">
      <caption className="transaction-table__caption">
        Transactions · Local currency
      </caption>
      <thead>
        <tr>
          <th scope="col">Customer</th>
          <th scope="col">Document</th>
          <th scope="col">Type</th>
          <th scope="col">Posting date</th>
          <th scope="col" className="transaction-table__num">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.customer}</td>
            <td>{t.documentNumber}</td>
            <td>{t.type}</td>
            <td>{t.postingDate}</td>
            <td
              className={
                "transaction-table__num" +
                (t.amount < 0 ? " transaction-table__num--negative" : "")
              }
            >
              {formatAmount(t.amount)}
            </td>
          </tr>
        ))}
        {transactions.length === 0 && (
          <tr>
            <td colSpan={5} className="transaction-table__empty">
              No transactions match the current search or filter.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
