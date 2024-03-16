import TransactionItem from "./TransactionItem/TransactionItem";

import css from "./TransactionHistory.module.scss";

function TransactionHistory({ items }) {
  return (
    <table className={css.tabls}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionItem items={items} />
      </tbody>
    </table>
  );
}

export default TransactionHistory;
