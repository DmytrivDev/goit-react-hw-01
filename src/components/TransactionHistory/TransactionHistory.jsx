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
        {items.map((item) => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
